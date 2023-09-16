import React from "react";
import { HeaderText } from "../components/Header-text";
import { IconList } from "../components/Icons-Render";
export const ProcessPage = () => {
  return (
    <>
    <div className="bg-dark-green text-creme h-fit">
    <HeaderText text={"Process"}/>
    <IconList/>
      <ol class="relative border-gray-200 dark:border-gray-700 p-2 items-start justify-between md:flex">
        <li class="mb-10 ml-6 p-2">
          <h3 class="hover:animate-bounce flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Dream
          </h3>
          <p class="mb-4 text-base font-normal">Explain how i come up w it</p>
        </li>
        <li class="mb-10 ml-6 p-2">
          <h3 class="hover:animate-bounce mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Design
          </h3>
          <p class="text-base font-normal">
            Figma and color and shit. plan framworks. think ahead!
          </p>
        </li>
        <li class="ml-6 mr-6 p-2">
          <h3 class="grow mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Develop
          </h3>
          <p class="text-base font-normal">
            code scalable applications with innovative solutions.
          </p>
        </li>
      </ol>
      </div>
    </>
  );
};
