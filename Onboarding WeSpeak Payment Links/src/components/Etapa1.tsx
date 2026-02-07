import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  XCircle, 
  DollarSign, 
  CreditCard, 
  AlertCircle,
  Check
} from 'lucide-react';

export function Etapa1() {
  const [checklist, setChecklist] = useState({
    info: false,
    depositos: false,
    metodos: false,
    restricciones: false
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const metodosDepago = [
    { name: 'Mercado Pago', desc: 'Procesador de pagos líder en Latinoamérica' },
    { name: 'Stripe', desc: 'Solución global de pagos en línea' },
    { name: 'PayU', desc: 'Plataforma de pagos para mercados emergentes' },
    { name: 'PayPal', desc: 'Sistema de pagos internacional reconocido' },
    { name: 'dLocal', desc: 'Procesador especializado en mercados locales' },
    { name: 'Almacenamiento de tarjeta', desc: 'Guardar datos de tarjeta de forma segura' },
    { name: 'Transferencia bancaria', desc: 'Pago directo a cuenta del hotel' }
  ];

  return (
    <div className="p-6 sm:p-8 lg:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Building2 className="w-4 h-4" />
          Etapa 1 de 3
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Configuración Inicial
        </h2>
        <p className="text-lg text-gray-600">
          Sin automatización - Preparación de información y métodos de pago
        </p>
      </div>

      {/* Objetivo */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          Objetivo de esta etapa
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Preparar toda la información de tu hotel y configurar los métodos de pago dentro del 
          sistema WeSpeak. <strong>En esta etapa el agente NO puede entregar enlaces de pago 
          de forma automática</strong>. Todo será manual y controlado por ti.
        </p>
      </div>

      {/* Section 1: Información del hotel */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              1. Recolección y carga de información del hotel
            </h3>
            <p className="text-gray-600">
              Ingresa los datos básicos de tu establecimiento en la plataforma WeSpeak
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Información requerida:</h4>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Nombre del complejo y ubicación</p>
                <p className="text-sm text-gray-600">Nombre oficial y dirección completa de tu hotel</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Horarios de check-in y check-out</p>
                <p className="text-sm text-gray-600">Ejemplo: Check-in desde las 15:00 hrs / Check-out hasta las 11:00 hrs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Políticas de cancelación</p>
                <p className="text-sm text-gray-600">Define bajo qué condiciones se puede cancelar y si hay devolución</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Impuestos aplicables</p>
                <p className="text-sm text-gray-600">Impuestos locales, tasas turísticas o cargos adicionales</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Políticas generales del establecimiento</p>
                <p className="text-sm text-gray-600">Normas sobre mascotas, fumar, eventos, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Depósitos y cobros */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              2. Configuración de depósitos y cobros
            </h3>
            <p className="text-gray-600">
              Define cómo y cuánto cobrarás a tus huéspedes
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Opciones de cobro:</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">Depósito parcial</p>
              <p className="text-sm text-gray-600">
                Requiere un porcentaje o monto fijo para confirmar la reserva. 
                El resto se paga al llegar o al momento del check-out.
              </p>
              <p className="text-xs text-gray-500 mt-2">Ejemplo: 30% del total o $50 USD</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">Pago total anticipado</p>
              <p className="text-sm text-gray-600">
                El huésped paga el 100% de la estadía al momento de reservar.
              </p>
              <p className="text-xs text-gray-500 mt-2">Recomendado para temporada alta</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">Sin depósito</p>
              <p className="text-sm text-gray-600">
                La reserva se confirma sin pago previo. El cobro se realiza en el hotel.
              </p>
              <p className="text-xs text-gray-500 mt-2">Mayor riesgo de no-shows</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              <strong>Recomendación:</strong> Define claramente tu política antes de continuar. 
              Puedes usar diferentes reglas según la temporada o tipo de habitación.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Métodos de pago */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              3. Conexión de métodos de pago
            </h3>
            <p className="text-gray-600">
              Conecta las plataformas de pago que usarás para recibir dinero
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Métodos disponibles:</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {metodosDepago.map((metodo, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{metodo.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{metodo.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-sm text-blue-900 mb-2">
              <strong>¿Cómo conectar un método de pago?</strong>
            </p>
            <ol className="text-sm text-blue-800 space-y-1 ml-4 list-decimal">
              <li>Crea una cuenta en la plataforma de pago elegida (ej: Mercado Pago)</li>
              <li>Obtén tus credenciales o API keys desde el panel de la plataforma</li>
              <li>Ingresa esas credenciales en la sección de pagos de WeSpeak</li>
              <li>Verifica que la conexión sea exitosa</li>
            </ol>
          </div>

          <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-sm text-red-900">
              <strong>⚠️ Advertencia:</strong> Asegúrate de usar credenciales de PRODUCCIÓN 
              (no de prueba) cuando estés listo para recibir pagos reales. Las credenciales 
              de prueba solo sirven para validar que todo funciona correctamente.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Restricciones */}
      <section className="mb-10">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Restricciones de esta etapa (MUY IMPORTANTE)
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-900">
                <strong>El agente NO entrega enlaces de pago automáticamente</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-900">
                Los enlaces de pago solo pueden generarse de forma <strong>MANUAL</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-900">
                Todo enlace se genera exclusivamente desde el <strong>cotizador de WeSpeak</strong>
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-200">
            <p className="text-sm text-red-800">
              Esto es temporal. La automatización se habilitará en la <strong>Etapa 3</strong>, 
              después de completar todas las pruebas de validación.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Final */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Check className="w-6 h-6 text-green-600" />
          Checklist: Etapa 1 Completada
        </h3>
        <p className="text-gray-600 mb-6">
          Marca cada punto a medida que lo completes. Todos deben estar listos antes de avanzar a la Etapa 2.
        </p>
        
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.info}
              onChange={() => toggleCheck('info')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.info ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Toda la información del hotel está cargada en WeSpeak (nombre, ubicación, horarios, políticas, impuestos)
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.depositos}
              onChange={() => toggleCheck('depositos')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.depositos ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              He definido las reglas de depósito y cobro (total, parcial o sin depósito)
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.metodos}
              onChange={() => toggleCheck('metodos')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.metodos ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              He conectado al menos un método de pago (Mercado Pago, Stripe, PayPal, etc.) con credenciales correctas
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.restricciones}
              onChange={() => toggleCheck('restricciones')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.restricciones ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Entiendo que en esta etapa los enlaces solo se generan manualmente desde el cotizador
            </span>
          </label>
        </div>

        {Object.values(checklist).every(v => v) && (
          <div className="mt-6 bg-green-600 text-white p-4 rounded-lg text-center">
            <p className="font-semibold">¡Etapa 1 completada! 🎉</p>
            <p className="text-sm mt-1">Puedes avanzar a la Etapa 2: Pruebas y Validación</p>
          </div>
        )}
      </section>
    </div>
  );
}
