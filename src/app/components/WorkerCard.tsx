import Image from "next/image";
import React from "react";
import { WorkerType } from "@/types/workers";

const WorkerCard = React.memo(({ worker }: { worker: WorkerType }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative w-full h-56">
        <Image
          src={worker.image}
          alt={worker.name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold text-gray-900">{worker.name}</h2>
        <p className="text-gray-500">{worker.service}</p>
        <p className="mt-3 text-lg font-bold text-indigo-600">
          ₹{Math.round(worker.pricePerDay * 1.18)} / day
        </p>
      </div>
    </div>
  ))

  export default WorkerCard