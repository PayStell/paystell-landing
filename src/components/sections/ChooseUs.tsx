import Image from "next/image";
import { Badge } from "@/components/ui/badge";
const ChooseUs = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="text-center">
                    <Badge className="w-fit bg-primary/10 px-3 rounded-xl hover:bg-primary/10 mb-3">
                        <h2 className="text-lg font-bold text-primary mr-3">BENEFITS</h2>
                        <Image src="/star.svg" width={28} height={28} alt="star" />
                    </Badge>
                    <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Why Choose Paystell?</p>
                    <p className="mt-8 text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8">Say Start collecting payments effortlessly with PayStell. Simplify your process, skip the hassle, and focus on what matters most—growing your business</p>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Global Reach</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Accept payments from anywhere in the world, making it easy to serve customers across borders with no hassle.</p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    src="/world-map.svg"
                                    width={500}
                                    height={500}
                                    alt="World Map"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="flex flex-1 items-center justify-center">

                                <Image className="w-full max-lg:max-w-xs"
                                    src="/security.svg"
                                    width={500}
                                    height={500}
                                    alt="Security"
                                />
                            </div>
                            <div className="m-3">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Secure and Reliable</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Accept payments from anywhere in the world, making it easy to serve customers across borders with no hassle</p>
                            </div>

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="flex flex-1 items-center justify-center">

                                <Image className="w-full max-lg:max-w-xs"
                                    src="/Cost-grid.svg"
                                    width={500}
                                    height={500}
                                    alt="Cost"
                                />
                            </div>
                            <div className="m-3">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Cost Effective</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Accept payments from anywhere in the world, making it easy to serve customers across borders with no hassle.</p>
                            </div>

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2 h-full">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex flex-col h-full overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="flex-shrink-0 flex-grow">
                                <Image
                                    className="w-full h-full object-cover object-[85%]"
                                    src="/dash-three.svg"
                                    width={500}
                                    height={500}
                                    alt="Dashboard"
                                />
                            </div>
                            <div className="px-8 pb-6 pt-4 sm:px-10 sm:pb-6 sm:pt-6 bg-white text-start">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Intuitive Dashboard
                                </p>
                                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 mx-auto max-lg:text-center">
                                    Accept payments from anywhere in the world, making it easy to serve customers across borders with no hassle.
                                </p>
                            </div>
                        </div>



                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default ChooseUs;