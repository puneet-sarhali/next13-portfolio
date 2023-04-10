"use client";
import { createClient } from "@supabase/supabase-js";
import { CiMail } from "react-icons/ci";

export default function Contact() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, message } = event.target as typeof event.target & {
      name: { value: string };
      message: { value: string };
    };
    const { data, error } = await supabase
      .from("portfolio")
      .insert([{ name: name.value, message: message.value }]);
    if (error) {
      alert(error.message);
    } else {
      alert("Success!");
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="mt-16 mx-8 flex flex-col">
        <div className="flex flex-col justify-center mb-3">
          <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit">
            <CiMail className="text-neutral-300 "></CiMail>
          </div>

          <div>
            <h2 className="text-neutral-300 text-xs ">Get in touch</h2>
            <p className="text-neutral-500 text-xxs">hire me / feedback</p>
          </div>
        </div>

        <input
          className="bg-neutral-800 text-xs py-2 px-2 rounded-md placeholder:text-neutral-500"
          placeholder="example@mail.com"
          type="email"
          name="email"
        />
        <textarea
          className="bg-neutral-800 text-xs py-2 px-2 rounded-md mt-2 placeholder:text-neutral-500"
          name="message"
          placeholder="message"
        />
        <button
          className="text-blue-200 bg-blue-900 text-xxs w-full h-7 text-center rounded-lg mt-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
