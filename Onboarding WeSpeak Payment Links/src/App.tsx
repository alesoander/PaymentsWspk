import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Circle } from 'lucide-react';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';

export default function App() {
  const [currentStage, setCurrentStage] = useState(1);

  const stages = [
    { id: 1, title: 'Configuración Inicial', subtitle: 'Sin automatización' },
    { id: 2, title: 'Pruebas y Validación', subtitle: 'Verificación de datos' },
    { id: 3, title: 'Activación Automática', subtitle: 'Enlaces de pago automáticos' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Onboarding WeSpeak
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Guía completa para implementar enlaces de pago
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center gap-2 flex-1 w-full sm:w-auto">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      currentStage === stage.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : currentStage > stage.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStage > stage.id ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="font-semibold">{stage.id}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold text-sm sm:text-base ${
                      currentStage === stage.id ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {stage.title}
                    </p>
                    <p className="text-xs text-gray-500">{stage.subtitle}</p>
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <ChevronRight className="hidden sm:block w-5 h-5 text-gray-300 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {currentStage === 1 && <Etapa1 />}
          {currentStage === 2 && <Etapa2 />}
          {currentStage === 3 && <Etapa3 />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 gap-4">
          <button
            onClick={() => setCurrentStage(Math.max(1, currentStage - 1))}
            disabled={currentStage === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              currentStage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          <button
            onClick={() => setCurrentStage(Math.min(3, currentStage + 1))}
            disabled={currentStage === 3}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              currentStage === 3
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }`}
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 WeSpeak - Plataforma de gestión hotelera y pagos digitales</p>
      </footer>
    </div>
  );
}
