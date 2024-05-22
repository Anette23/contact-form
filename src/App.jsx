import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const App = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setSuccess(true);
    reset();
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <main className="bg-lightGreen min-h-screen py-8 px-4 sm:grid sm:place-items-center text-darkGrey">
      {success && (
        <div className="bg-hover text-white p-5 relative rounded-xl">
          <p className="font-bold flex items-center gap-2">
            <svg
              fill="#FFFFFF"
              height="1rem"
              width="1rem"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#FFFFFF"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496 C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z" />{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <polygon points="362.224,155.76 212.016,322.656 148.72,259.36 137.408,270.672 212.64,345.904 374.128,166.464 " />{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Message Sent!
          </p>
          <p className="text-sm">
            {" "}
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      )}
      <section className="bg-white rounded-xl p-6 md:px-8 min-w-fit lg:w-[40rem]">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:flex sm:gap-4 sm:justify-between">
            <div className="flex flex-col my-6 w-full">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                className={`${
                  errors.firstName
                    ? "border-red"
                    : isValid
                    ? "border-green"
                    : "border-darkGrey"
                }`}
                {...register("firstName", {
                  required: "This field is required",
                  onChange: () => trigger("firstName"),
                  onBlur: () => trigger("firstName"),
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName && (
                <p
                  className="text-red text-xs font-bold mt-2"
                  aria-live="assertive"
                >
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col my-6 w-full">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                className={`${
                  errors.lastName
                    ? "border-red"
                    : isValid
                    ? "border-green"
                    : "border-darkGrey"
                }`}
                {...register("lastName", {
                  required: "This field is required",
                  onChange: () => trigger("lastName"),
                  onBlur: () => trigger("lastName"),
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName && (
                <p
                  className="text-red text-xs font-bold mt-2"
                  aria-live="assertive"
                >
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col ">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              className={`${
                errors.email
                  ? "border-red"
                  : isValid
                  ? "border-green"
                  : "border-darkGrey"
              }`}
              {...register("email", {
                required: "Please enter a valid email address",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
                onChange: () => trigger("email"),
                onBlur: () => trigger("email"),
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p
                className="text-red text-xs font-bold mt-2"
                aria-live="assertive"
              >
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col my-6">
            <label htmlFor="query">Query Type *</label>
            <fieldset
              className="flex flex-col gap-4 sm:flex-row"
              {...register("query", {
                required: " Please select a query type",
                onChange: () => trigger("query"),
                onBlur: () => trigger("query"),
              })}
              aria-invalid={errors.query ? "true" : "false"}
            >
              <div className="flex items-center gap-2 radio w-full">
                <input type="radio" value="general" {...register("query")} />{" "}
                General Enquiry
              </div>
              <div className="flex items-center gap-2 radio w-full">
                <input type="radio" value="support" {...register("query")} />{" "}
                Support Request
              </div>
            </fieldset>
            {errors.query && (
              <p
                className="text-red text-xs font-bold mt-2"
                aria-live="assertive"
              >
                {errors.query.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              cols="10"
              rows="10"
              className={`${
                errors.message
                  ? "border-red"
                  : isValid
                  ? "border-green"
                  : "border-darkGrey"
              }`}
              {...register("message", {
                required: "This field is required",
                onChange: () => trigger("message"),
                onBlur: () => trigger("message"),
              })}
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && (
              <p
                className="text-red text-xs font-bold mt-2"
                aria-live="assertive"
              >
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-8 cursor-pointer">
            <div className="flex gap-3">
              <input
                type="checkbox"
                {...register("checkbox", {
                  required:
                    "To submit this form, please consent to being contacted",
                  onChange: () => trigger("checkbox"),
                  onBlur: () => trigger("checkbox"),
                })}
                aria-invalid={errors.checkbox ? "true" : "false"}
              />
              <p className="text-sm">
                I consent to being contacted by the team *
              </p>
            </div>
            {errors.checkbox && (
              <p
                className="text-red text-xs font-bold mt-2"
                aria-live="assertive"
              >
                {errors.checkbox.message}
              </p>
            )}
          </div>
          <div>
            <button className="bg-green text-white w-full py-4 hover:bg-hover">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default App;
