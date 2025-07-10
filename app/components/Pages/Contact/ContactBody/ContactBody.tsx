import { useState } from "react";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import { EmailIcon } from "~/components/Icons/EmailIcon";
import { useMutation } from "@tanstack/react-query";
import { type ContactPayload, sendContactEmail } from "~/api/api";
import { userMessageManager } from "~/managers/userMessageManager";

function ContactBody() {
  const { mutate, isPending } = useMutation({ mutationFn: sendContactEmail });

  const [formData, setFormData] = useState<ContactPayload>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (Object.values(formData).some((value) => !value)) {
      setIsFormInvalid(true);
      userMessageManager.showUserMessage(
        "One or more fields are empty",
        "ERROR",
        3000,
      );
      return;
    }
    mutate(formData);
  }

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-col p-2.5 gap-4 items-center">
        <p className="text-center">
          Have questions or feedback? Send us a message, and we’ll try to
          respond within 24 hours.
        </p>
        <form
          id="contact-form"
          className="flex flex-col max-w-[400px] w-full rounded-xl bg-gray-600 gap-2.5 p-2.5 text-black"
          onSubmit={handleSubmit}
          onFocus={() => setIsFormInvalid(false)}
        >
          <input
            name="name"
            placeholder="Name"
            className={
              "px-2.5 py-1.25 bg-white rounded-md border-1 " +
              (isFormInvalid === true && formData.name === ""
                ? "border-red-600"
                : "border-white")
            }
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className={
              "px-2.5 py-1.25 bg-white rounded-md border-1 " +
              (isFormInvalid === true && formData.email === ""
                ? "border-red-600"
                : "border-white")
            }
            onChange={handleChange}
          />
          <input
            name="subject"
            placeholder="Subject"
            className={
              "px-2.5 py-1.25 bg-white rounded-md border-1 " +
              (isFormInvalid === true && formData.subject === ""
                ? "border-red-600"
                : "border-white")
            }
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message..."
            className={
              "min-h-[100px] text-top px-2.5 py-1.25 bg-white rounded-md border-1 " +
              (isFormInvalid === true && formData.message === ""
                ? "border-red-600"
                : "border-white")
            }
            onChange={handleChange}
          />

          <TextButton
            ariaLabel="Send message to support team"
            text={isPending ? "Sending..." : "Send"}
            type="submit"
            onPress={() => {}}
            disabled={isPending}
            containerClassName="max-w-50 w-full p-2.5 bg-black-500 rounded-full drop-shadow-md self-center cursor-pointer"
            textClassName="text-white"
          />
        </form>
        <div className="flex flex-col max-w-[400px] w-full p-2.5 bg-white rounded-md text-black">
          <div className="flex flex-row items-center gap-2">
            <EmailIcon />
            <p>multileggedstore@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBody;
