interface NotificationProps {
  text: string;
  severity: "SEVERE" | "WARN" | "INFO";
}

function Notification(props: NotificationProps) {
  let severityColor = "bg-orange-900";

  switch (props.severity) {
    case "SEVERE":
      severityColor = "bg-orange-900";
      break;
    case "WARN":
      severityColor = "bg-yellow-600";
      break;
    case "INFO":
      severityColor = "bg-blue-500";
      break;
  }

  return (
    <div className="flex flex-row w-full max-w-100 bg-yellow-100 text-black gap-2.5 text-[16px] h-12 items-center drop-shadow-md">
      <div className={`w-2.5 h-[100%] p-1 ${severityColor}`} />
      <div className="grid place-content-center rounded-full bg-black w-[36px] h-[36px] text-white text-[28px]">
        !
      </div>
      {props.text}
    </div>
  );
}

export default Notification;
