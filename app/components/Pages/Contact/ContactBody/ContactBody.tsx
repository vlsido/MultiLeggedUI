import { useCallback } from "react";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import { EmailIcon } from "~/components/Icons/EmailIcon";

function ContactBody() {
  const sendMessage = useCallback(() => {}, []);

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-col p-2.5 gap-4 items-center">
        <p className="text-center">
          Have questions or feedback? Send us a message, and we’ll try to
          respond within 24 hours.
        </p>
        <div
          id="contact-form"
          className="flex flex-col max-w-[400px] w-full gap-2.5 p-2.5 text-black"
        >
          <input
            placeholder="Name"
            className="px-2.5 py-1.25 bg-white rounded-md"
          />
          <input
            placeholder="Email"
            className="px-2.5 py-1.25 bg-white rounded-md"
          />
          <textarea
            placeholder="Your message..."
            className="min-h-[100px] text-top px-2.5 py-1.25 bg-white rounded-md"
          />

          <TextButton
            ariaLabel="Send message to support team"
            text="Send"
            onPress={sendMessage}
            containerClassName="max-w-50 w-full p-2.5 bg-yellow-100 rounded-full drop-shadow-md self-center cursor-pointer"
          />
        </div>
        <div className="flex flex-col max-w-[400px] w-full p-2.5 bg-white rounded-md text-black">
          <div className="flex flex-row items-center gap-2">
            <EmailIcon />
            <p>info@multilegged.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBody;
