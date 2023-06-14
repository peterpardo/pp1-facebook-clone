"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("login not yet working.");
  };

  if (session) {
    redirect("/");
  }

  return (
    <main className="bg-gray-100 h-screen pt-10 lg:pt-40">
      <div className="flex flex-col items-center w-auto mx-4 lg:flex-row lg:w-0 lg:min-w-[1250px] lg:mx-auto">
        {/* logo */}
        <div className="lg:flex-1">
          <h1 className="text-center text-[color:var(--fb-blue)] text-5xl font-bold mb-5">
            Logo
          </h1>

          {/* description */}
          <h2 className="text-xl text-justify mb-10 max-w-[350px] w-full lg:mx-auto">
            Can't think of a logo. Follow your dreams and always remember, time
            is gold. Jesus loves you!
          </h2>
        </div>

        {/* form */}
        <div className="w-[400px] lg:flex-1 lg:w-0">
          <div className="bg-white rounded-md drop-shadow-md p-4 lg:w-[400px] lg:mx-auto">
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="block p-3 mb-3 outline-[color:var(--fb-blue)] w-full border  rounded-md border-gray-200"
              />
              <input
                type="password"
                placeholder="Password"
                className="block p-3 mb-3 outline-[color:var(--fb-blue)] w-full border  rounded-md border-gray-200"
              />
              <button
                type="submit"
                className="bg-[color:var(--fb-blue)] text-xl font-bold mb-3 text-white p-3 text-center rounded-md w-full"
              >
                Log in
              </button>
            </form>

            {/* Forgotten password */}
            <div className="text-center mb-3">
              <Link
                href="/login"
                className="text-[color:var(--fb-blue)] text-sm"
              >
                Forgotten password?
              </Link>
            </div>

            <hr className="mb-3" />

            {/* Create account button */}
            <button
              type="button"
              className="block bg-green-600 rounded-md text-white font-bold text-center p-3 mx-auto mb-3 hover:bg-green-500"
              onClick={() => alert("Also not yet working hehe :)")}
            >
              Create new Account
            </button>

            <hr className="mb-3" />

            {/* Sign in with google */}
            <button
              type="button"
              className="flex items-center bg-gray-100 rounded-md font-semibold text-center p-3 mx-auto mb-3 hover:bg-gray-50"
              onClick={() =>
                signIn("google", { callback: "http://localhost:3000/" }, { prompt: "login" })
              }
            >
              <Image
                src="/icons/google.png"
                alt="google"
                width={20}
                height={20}
                className="mr-3"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
