interface NotificationProps {
  testId: string;
  text: string;
}

function Notification(props: NotificationProps) {

  return (
    <div
      data-testid={props.testId}
      className="flex flex-row w-full max-w-100 bg-yellow-100 text-black gap-2.5 text-[16px] h-12 items-center drop-shadow-md"
    >
      <div className="w-2.5 h-[100%] p-1 bg-orange-900" />
      <div className="grid place-content-center rounded-full bg-black w-[36px] h-[36px] text-white text-[28px]">
        !
      </div>
      {props.text}
    </div>
  );
}

export default Notification;
