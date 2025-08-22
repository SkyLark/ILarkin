import { TopMenu } from './TopMenu';
import ChatBar from './components/ChatBar';

import { Container, Box } from '@radix-ui/themes';

export default function Home() {
  const handleChatApply = () => {
    // Handle chat apply logic
  };

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="relative flex gap-2 h-full w-full flex-1 transition-colors z-0">
        {/* Side bar */}
        <div className="w-64 shadow-[1px_0_0_0_rgba(107,114,128,0.2)] bg-gray-100">
          {/* Side bar content */}
        </div>
        {/* Chat list */}
        <div className="relative flex h-screen max-w-full flex-1 flex-col">
          <main className="relative h-full w-full flex-1">
            <div
              role="presentation"
              className="flex h-full flex-col focus-visible:outline-0 overflow-hidden"
            >
              <header className="sticky top-0 p-2 mb-5 flex items-center justify-between z-20 bg-white shadow-[0_1px_0_0_rgba(107,114,128,0.2)]">
                <h1 className="text-lg font-normal">ILarkin Chat</h1>
              </header>
              <div className="relative flex basis-auto flex-col grow overflow-hidden">
                <div className="relative h-full">
                  <div className="flex h-[calc(100vh-160px)] flex-col overflow-y-auto">
                    <div className="flex flex-col text-sm">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
                        turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
                        sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac
                        tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam
                        tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
                        tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec
                        fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec,
                        commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum
                        aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.
                        Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur
                        augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl,
                        mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea
                        dictumst.
                      </p>
                      <p>
                        Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit
                        mauris, sed placerat ipsum urna sed risus. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos hymenaeos. Nulla facilisi.
                        Sed a turpis eu lacus commodo facilisis. Morbi fringilla, wisi in dignissim
                        interdum, justo lectus sagittis dui, et vehicula libero dui cursus dui.
                        Mauris tempor ligula sed lacus. Duis cursus enim ut augue. Cras ac magna.
                        Cras nulla. Nulla egestas. Curabitur a leo. Quisque egestas wisi eget nunc.
                        Nam feugiat lacus vel est. Curabitur consectetuer.
                      </p>
                      <p>
                        Suspendisse vel felis. Ut commodo, ipsum quis fringilla dapibus, elit risus
                        luctus risus, at pulvinar nisi odio vel nisl. Aliquam erat volutpat. Sed
                        congue, dui vel tristique mollis, libero quam dapibus nisi, eget tempus
                        augue est vel felis. Donec est nunc, ornare non, aliquet non, tempus vel,
                        dolor. Curabitur euismod, nisi vel consectetur interdum, nisl nisi
                        scelerisque justo, ut feugiat elit arcu ut nulla. Suspendisse potenti. Ut a
                        eros at ligula vehicula pretium. Maecenas feugiat pede at sapien. Vivamus
                        augue. Fusce eget tellus ultrices ligula volutpat adipiscing. Mauris
                        convallis ullamcorper purus. Integer malesuada. Nullam ornare, velit vel
                        tincidunt egestas, libero erat ultricies tellus, vitae tincidunt nulla est
                        non lacus. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                        rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
                        pulvinar facilisis. Ut felis.
                      </p>
                      <p>
                        Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
                        vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                        quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla
                        quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                        tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet,
                        nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
                        ultrices ut, elementum vulputate, nunc. Proin at arcu. Pellentesque posuere.
                        Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue
                        blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero,
                        sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.
                      </p>
                      <p>
                        Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat
                        nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
                        suscipit. Morbi fringilla convallis sapien. Proin libero. Aliquam erat
                        volutpat. Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut
                        rhoncus gravida arcu.
                      </p>
                      <p>
                        Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
                        Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum
                        fermentum tortor id mi. Pellentesque et arcu. Ut varius tincidunt libero.
                        Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut est. Ut
                        quis orci. Integer imperdiet lectus quis justo. Fusce erat. Vivamus a
                        tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                      </p>
                      <p>
                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui
                        purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget
                        neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede.
                        Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit
                        feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum
                        pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus
                        consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in
                        nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas.
                      </p>
                      <p>
                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui
                        purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget
                        neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede.
                        Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit
                        feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum
                        pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus
                        consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in
                        nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 left-0 right-0">
                <ChatBar />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
