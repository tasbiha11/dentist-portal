import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { AiOutlinePaperClip } from 'react-icons/ai';

const About = () => {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://plus.unsplash.com/premium_photo-1675686363399-91ad6111f82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />



            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Did you know our consultations are completely free and confidential?</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Failure to protect and secure confidential information may not only lead to the loss of business or patients, but it also unlocks the danger of confidential information being misused to commit illegal activity such as fraud. A key element of confidentiality is that it helps build trust.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Does a Life Time Membership Work Anywhere? Depending on your membership plan, you may only be able to use your membership at other local Dentist Portals. Some dentals are more exclusive and don't accept members from other areas.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                <div className="h-px flex-auto bg-gray-100" />
                            </div>
                            <h6> Emergency Check up</h6>
                            <h6>Routine Check up</h6>
                            <h6>Painkillers</h6>
                            <h6>Doctors Recommendation</h6>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900 mb-5">৳ 5,555</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Tk.</span>
                                    </p>
                                    <a href="/about">
                                        <PrimaryButton>Get access</PrimaryButton>
                                    </a>
                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Application for subscription</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Fill out the forms below and submit to know more.</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">

                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div className="flex w-0 flex-1 items-center">
                                    <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"></AiOutlinePaperClip>
                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">Children yearly subscription.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                    </div>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div className="flex w-0 flex-1 items-center">
                                    <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"></AiOutlinePaperClip>
                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">Lifetime member form.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                    </div>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                    </a>
                                </div>
                            </li>

                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default About;