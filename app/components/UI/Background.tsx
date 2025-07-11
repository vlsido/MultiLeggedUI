function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 bg-[url(/bg_bugs.png)] bg-center xl:bg-left bg-size-[auto_750px] bg-local bg-repeat-y scale-x-[-1]">
      <div className="flex flex-1 xl:bg-[url(/bg_bugs.png)] bg-left bg-size-[auto_750px] bg-local bg-repeat-y scale-x-[-1]">
        {children}
      </div>
    </div>
  );
}

export default Background;
