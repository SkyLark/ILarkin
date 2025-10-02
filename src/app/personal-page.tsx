'use client';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ChatMessage } from '../types/chat';
import ChatBar from './components/ChatBar';

export default function SectionsWithSmartScroll() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Refs
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const newestSectionRef = useRef<HTMLDivElement | null>(null);
  const newestTailRef = useRef<HTMLDivElement | null>(null); // bottom anchor in newest section
  const lastAutoScrollAt = useRef<number>(0); // throttle repeated auto-scrolls
  const roDebounce = useRef<number | null>(null); // debouncer id for ResizeObserver

  // Toggle to disable snap while we perform programmatic scrolls
  const [noSnap, setNoSnap] = useState(false);

  // Tuning constants
  const TAIL_MARGIN = 12; // px: keep a small margin below the tail to avoid micro scrolls
  const SCROLL_THROTTLE_MS = 120; // ms: avoid re-triggering auto-scrolls too frequently

  // --- Helpers ---------------------------------------------------------------

  // Check if bottom anchor inside newest section overflows the viewport bottom
  const tailOverflowsViewport = () => {
    const vp = viewportRef.current;
    const tail = newestTailRef.current;
    if (!vp || !tail) return false;

    const vpRect = vp.getBoundingClientRect();
    const tailRect = tail.getBoundingClientRect();

    // True if tail's bottom is below the viewport's bottom, with hysteresis margin
    return tailRect.bottom > vpRect.bottom + TAIL_MARGIN;
  };

  // Scroll just enough to bring the tail into view (to the bottom)
  const scrollTailIntoView = (smooth = true) => {
    const vp = viewportRef.current;
    const tail = newestTailRef.current;
    if (!vp || !tail) return;

    const vpRect = vp.getBoundingClientRect();
    const tailRect = tail.getBoundingClientRect();
    // Scroll enough so that the tail is inside the viewport plus a small margin
    const delta = tailRect.bottom - (vpRect.bottom - TAIL_MARGIN);

    if (delta > 0) {
      vp.scrollBy({ top: delta, behavior: smooth ? 'smooth' : 'auto' });
    }
  };

  // Temporarily disable snap, run a scroll action, then re-enable snap
  const withSnapDisabled = (scrollAction: () => void) => {
    const vp = viewportRef.current;
    if (!vp) return;

    setNoSnap(true);

    // Allow style to apply before scrolling
    requestAnimationFrame(() => {
      scrollAction();

      const onEnd = () => {
        setNoSnap(false);
        vp.removeEventListener('scrollend', onEnd);
      };

      // Re-enable on scroll end (with a small fallback timer)
      vp.addEventListener('scrollend', onEnd, { once: true });
      setTimeout(() => {
        // Fallback for browsers without 'scrollend'
        setNoSnap(false);
      }, 350);
    });
  };

  // --- Effects ---------------------------------------------------------------

  // When a NEW SECTION is added -> snap that section to the top cleanly
  useEffect(() => {
    const scrollToNewestSectionTop = () => {
      newestSectionRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    withSnapDisabled(scrollToNewestSectionTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]); // runs when sections array changes (i.e., new section appended)

  // Build a growth signature for the newest section (lengths of last 1-2 messages)
  // so we can detect when content grows (e.g., streaming tokens) without adding a new message
  const lastSectionGrowthKey = useMemo(() => {
    const lastTwo = messages.slice(-2);
    return lastTwo.map((m) => m?.content?.length ?? 0).join('|');
  }, [messages]);

  // When content in the newest section grows, keep the tail in view
  // Scroll ONLY IF the new content would be out of view at the bottom.
  useLayoutEffect(() => {
    if (tailOverflowsViewport()) {
      const now =
        typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
      if (now - lastAutoScrollAt.current >= SCROLL_THROTTLE_MS) {
        withSnapDisabled(() => {
          scrollTailIntoView(true);
        });
        lastAutoScrollAt.current = now;
      }
    }
    // We intentionally depend on the growth key (content length changes)
  }, [lastSectionGrowthKey]);

  // Also observe reflows on the newest section (fonts/images/layout shifts)
  useEffect(() => {
    const sec = newestSectionRef.current;
    if (!sec || !('ResizeObserver' in window)) return;
    const cb = () => {
      if (roDebounce.current) {
        window.clearTimeout(roDebounce.current);
      }
      roDebounce.current = window.setTimeout(() => {
        if (tailOverflowsViewport()) {
          const now =
            typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
          if (now - lastAutoScrollAt.current >= SCROLL_THROTTLE_MS) {
            withSnapDisabled(() => {
              scrollTailIntoView(false);
            });
            lastAutoScrollAt.current = now;
          }
        }
      }, 60);
    };
    const ro = new ResizeObserver(cb);
    ro.observe(sec);
    return () => {
      ro.disconnect();
      if (roDebounce.current) window.clearTimeout(roDebounce.current);
    };
  }, [messages.length]);

  // --- Render ----------------------------------------------------------------

  return (
    <>
      <div className="relative  h-[calc(100dvh-62px)] max-w-full  shadow">
        {/* Outer scroll container (the only scrollable area) */}
        <div
          ref={viewportRef}
          className="relative h-full w-full  overflow-auto bg-neutral-50"
          style={{
            scrollSnapType: noSnap ? 'none' : 'y mandatory',
            scrollbarGutter: 'stable both-edges',
            overflowAnchor: 'none',
          }}
        >
          {Array.from({ length: Math.ceil(messages.length / 2) }, (_, si) => {
            const start = si * 2;
            const group = messages.slice(start, start + 2);
            const isLastSection = si === Math.ceil(messages.length / 2) - 1;

            return (
              <div
                key={`sec-${si}`}
                ref={isLastSection ? newestSectionRef : null}
                className={`snap-start flex flex-col px-6 py-6 bg-white ${isLastSection ? 'min-h-[calc(100dvh-62px)]' : ''}`}
              >
                {group.map((m, j) => {
                  const idx = start + j;
                  return (
                    <article
                      data-turn={m.role}
                      key={idx}
                      className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div
                        className={
                          'inline-block rounded-xl px-3 py-2 ' +
                          (m.role === 'user' ? 'bg-gray-900 text-white' : 'bg-gray-100')
                        }
                      >
                        <p>{m.content}</p>
                      </div>
                    </article>
                  );
                })}
                {isLastSection ? <div ref={newestTailRef} /> : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <ChatBar setMessages={setMessages} />
      </div>
    </>
  );
}
