import { useState } from "react";


export default function SoruAnalizi({title,image,hints,solution}) {
  const [step, setStep] = useState(0);

  return (
   <div className="grid grid-cols-2">
    <div className="max-w-xl mx-auto p-6 pb-10">
      <h2 className="text-2xl font-bold mb-4">
     {title}- Soru Analizi
      </h2>
      <div className="relative border rounded-lg overflow-hidden shadow-lg ">
        <img
          src={image}
          alt={title}
          className="w-full"
        />
        {step >= 1 && (
          <div className="absolute top-10 left-8 bg-yellow-100 p-2 rounded shadow">
          {hints[0]}
          </div>
        )}

        {step >= 2 && (
          <div className="absolute bottom-20 right-10 bg-blue-100 p-2 rounded shadow">
            📌{hints[1]}
          </div>
        )}

        {step >= 3 && (
          <div className="absolute bottom-5 left-10 bg-green-100 p-2 rounded shadow">
            ✅ {solution}
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setStep(1)}
          className="px-4 py-2 bg-mustard-500 text-white rounded"
        >
          İpucu 1
        </button>

        <button
          onClick={() => setStep(2)}
          className="px-4 py-2 bg-dark text-white rounded"
        >
          İpucu 2
        </button>

        <button
          onClick={() => setStep(3)}
          className="px-4 py-2 bg-olive-500 text-white rounded"
        >
          Tam Çözüm
        </button>
      </div>
    </div>
    </div>
  );
}
