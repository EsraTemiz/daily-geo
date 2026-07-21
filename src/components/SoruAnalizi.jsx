import { useState } from "react";
import Acı from "../assets/d.Acı9.png";

export default function SoruAnalizi() {
  const [step, setStep] = useState(0);

  return (
   <div className="grid grid-cols-2 bg-amber-400">
    <div className="max-w-xl mx-auto p-6 pb-10">
      <h2 className="text-2xl font-bold mb-4">
        Üçgenler - Soru Analizi
      </h2>
      <div className="relative border rounded-lg overflow-hidden shadow-lg ">
        <img
          src={Acı}
          alt="Geometri Sorusu"
          className="w-full"
        />
        {step >= 1 && (
          <div className="absolute top-10 left-8 bg-yellow-100 p-2 rounded shadow">
            ⚠ Bu soruda ilk dikkat edilmesi gereken nokta:
            180 derece ile kg arasında doğru orantı kurmak
          </div>
        )}

        {step >= 2 && (
          <div className="absolute bottom-20 right-10 bg-blue-100 p-2 rounded shadow">
            📌 180 derecede 150 kg ise ..?
          </div>
        )}

        {step >= 3 && (
          <div className="absolute bottom-5 left-10 bg-green-100 p-2 rounded shadow">
            ✅ orantı çözülerek sonuç bulunur.
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setStep(1)}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          İpucu 1
        </button>

        <button
          onClick={() => setStep(2)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          İpucu 2
        </button>

        <button
          onClick={() => setStep(3)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Tam Çözüm
        </button>
      </div>
    </div>
    </div>
  );
}
