import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex justify-center items-center gap-y-10 sm:p-16 xs:p-8 px-6 py-12 mx-auto w-full max-w-screen-2xl flex-col">
      <section className="w-full">
        <Skeleton className="h-[274px] w-full rounded-lg bg-black/40" />
      </section>
      <section className="flex flex-col md:flex-row gap-x-10">
        <Skeleton className="h-10 w-60 bg-black/40" />
        <Skeleton className="h-10 w-60 bg-black/40" />
      </section>
      <section className="flex w-full flex-col">
        <Skeleton className="h-10 w-60 bg-black/40" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[350px] w-full sm:w-[300px] bg-black/40" />
          <Skeleton className="h-[350px] w-full sm:w-[300px] bg-black/40" />
          <Skeleton className="h-[350px] w-full sm:w-[300px] bg-black/40" />
        </div>
      </section>
      <section className="flex w-full flex-col">
        <Skeleton className="h-10 w-60 bg-black/40" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[350px] w-full sm:w-[300px] bg-black/40" />
          <Skeleton className="h-[350px] w-full sm:w-[300px] bg-black/40" />
          <Skeleton className="h-[350px] w-full sm:w-[300px] bg-black/40" />
        </div>
      </section>
    </main>
  );
};

export default loading;
