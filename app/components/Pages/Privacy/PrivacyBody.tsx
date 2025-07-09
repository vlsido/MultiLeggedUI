function PrivacyBody() {
  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-col max-w-[600px] my-2.5 p-2.5 self-center bg-white text-black rounded-xl">
        <div id="header" className="px-5 py-2.5">
          <h1 className="text-[20px] font-bold">PRIVACY POLICY</h1>
        </div>
        <div id="sections-list" className="flex flex-col py-2.5 gap-2.5">
          <div id="section" className="px-5">
            <h2 className="text-[20px] font-bold">Who we are</h2>
            <p className="text-[16px]">
              BugApp is an app built by Vladislav Sidorenko and is located at
              www.multilegged.web.app
            </p>
          </div>

          <div id="section" className="px-5">
            <h2 className="text-[20px] font-bold">
              Information collection and use
            </h2>
            <p className="text-[16px]">
              We collect only the information necessary for package deliveries,
              including your email, phone number, and name.
            </p>
          </div>

          <div id="section" className="px-5">
            <h2 className="text-[20px] font-bold">
              Who we share your data with
            </h2>
            <p className="text-[16px]">
              We don’t share your data with anyone. Exception is information
              delivery courrier needs to deliver the parcel to you.
            </p>
          </div>

          <div id="section" className="px-5">
            <h2 className="text-[20px] font-bold">
              How long we retain your data
            </h2>
            <p className="text-[16px]">
              For users that register on our website (if any), we store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username). Website administrators
              can also see and edit that information.
            </p>
          </div>
          <div id="section" className="px-5">
            <h2 className="text-[20px] font-bold">
              Changes to this privacy policy
            </h2>
            <p className="text-[16px]">
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. This policy is effective as of 09.07.2025.
            </p>
          </div>
          <div id="section" className="px-5">
            <h2 className="text-[20px] font-bold">Contact us</h2>
            <p className="text-[16px]">
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at multileggedstore@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyBody;
