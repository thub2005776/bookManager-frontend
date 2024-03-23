<template>
    <div>
        <h1 class="text-green-500 font-bold text-2xl dark:text-white text-center mb-6">Thông tin sách</h1>
        <div class="lg:grid lg:grid-cols-4">
            <div class="flex gap-3 md:gap-5 lg:col-span-2 ">
                <img class="lg:w-72 w-64 p-1 rounded-md border border-blue-300 dark:border-gray-600"
                    src="https://i.pinimg.com/564x/0e/43/e0/0e43e0d82f125c17761b0e2a859c05ca.jpg" alt="book">

                <div>
                    <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Tên sách
                            </dt>
                            <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
                        </div>
                        <div class="flex flex-col py-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Tác giả
                            </dt>
                            <dd class="text-lg font-semibold">92 Miles Drive</dd>
                        </div>
                        <div class="flex flex-col py-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Thể loại
                            </dt>
                            <dd class="text-lg font-semibold">92 Miles Drive</dd>
                        </div>
                        <div class="flex flex-col pt-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Lượt mượn
                            </dt>
                            <dd class="text-lg font-semibold">10</dd>
                        </div>
                        <div class="flex flex-col pt-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Số lượng
                            </dt>
                            <dd class="text-lg font-semibold">10</dd>
                        </div>
                    </dl>


                    <button type="button"
                        class="mt-6 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Mượn sách
                    </button>
                </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:col-span-2">
                <p class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Trích đoạn </p>
                <blockquote
                    class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Flowbite is
                        just
                        awesome. It contains tons of predesigned components and pages starting from login screen to
                        complex
                        dashboard. Perfect choice for your next SaaS application."</p>
                </blockquote>
            </div>

        </div>
    </div>
</template>