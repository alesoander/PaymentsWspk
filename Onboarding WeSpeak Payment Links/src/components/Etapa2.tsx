import { useState } from 'react';
import { 
  TestTube2, 
  Link2, 
  Search, 
  Calendar, 
  Users, 
  Bed, 
  MousePointerClick,
  Copy,
  ExternalLink,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Check,
  Database
} from 'lucide-react';

export function Etapa2() {
  const [checklist, setChecklist] = useState({
    proceso: false,
    prueba: false,
    validacion: false,
    soporte: false
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 sm:p-8 lg:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <TestTube2 className="w-4 h-4" />
          Etapa 2 de 3
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Pruebas y Validación de Datos
        </h2>
        <p className="text-lg text-gray-600">
          Verificación manual controlada - Aún sin automatización
        </p>
      </div>

      {/* Objetivo */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 rounded-r-xl mb-8">
        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-purple-600" />
          Objetivo de esta etapa
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Validar que las reservas y pagos se registran correctamente tanto en WeSpeak como 
          en el sistema de tu hotel (si cuentas con una integración completa).
        </p>
        <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 mt-4">
          <p className="text-purple-900 font-medium text-sm">
            ⚠️ El agente aún NO entrega enlaces de pago automáticamente. 
            Todo el proceso sigue siendo manual y controlado por ti.
          </p>
        </div>
      </div>

      {/* Section 2.1: Generar enlace manual */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Link2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              2.1 Cómo generar un enlace de pago manual en WeSpeak
            </h3>
            <p className="text-gray-600">
              Proceso paso a paso para crear tu primer enlace de pago
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 space-y-4">
          {/* Paso 1 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Abrir una conversación en WeSpeak</p>
                <p className="text-sm text-gray-600">
                  Accede a tu panel de WeSpeak y abre cualquier conversación existente o crea una nueva.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4 text-purple-600" />
                  Utilizar el botón del cotizador
                </p>
                <p className="text-sm text-gray-600">
                  Busca y haz clic en el botón del cotizador. Usualmente se encuentra en la parte 
                  superior o lateral de la conversación.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2">Ingresar datos de búsqueda</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700"><strong>Fechas:</strong> Check-in y check-out</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700"><strong>Cantidad de adultos</strong> (y niños si aplica)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-600" />
                  Realizar la búsqueda
                </p>
                <p className="text-sm text-gray-600">
                  Presiona el botón "Buscar" o "Cotizar". El sistema te mostrará las habitaciones disponibles.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <Bed className="w-4 h-4 text-purple-600" />
                  Verificar opciones de habitaciones
                </p>
                <p className="text-sm text-gray-600">
                  Asegúrate de que aparezcan todas tus habitaciones disponibles con sus precios correctos.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="bg-white rounded-xl p-5 border-2 border-purple-400 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-purple-600" />
                  Activar la opción "Generar enlace de pago"
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  En la parte superior izquierda del cotizador, encontrarás un interruptor o checkbox 
                  que dice "Generar enlace de pago". <strong>Actívalo.</strong>
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-xs text-purple-900">
                    💡 <strong>Tip:</strong> Esta opción solo aparece si completaste correctamente la Etapa 1 
                    y conectaste al menos un método de pago.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 7 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                7
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Seleccionar la habitación</p>
                <p className="text-sm text-gray-600">
                  Haz clic en la habitación que deseas reservar para el cliente.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 8 */}
          <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                8
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4 text-purple-600" />
                  Presionar "Generar enlace"
                </p>
                <p className="text-sm text-gray-600">
                  Se mostrará un botón que dice "Generar enlace" o similar. Presiónalo.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 9 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-400 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                9
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Copy className="w-4 h-4 text-green-600" />
                  El enlace se copia automáticamente
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  El sistema copiará automáticamente el enlace de pago al portapapeles de tu computadora.
                </p>
                <div className="bg-white border-2 border-green-200 rounded-lg p-3 space-y-2">
                  <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-green-600" />
                    ¿Cómo validarlo?
                  </p>
                  <p className="text-xs text-gray-600">
                    1. Abre una nueva pestaña en tu navegador
                  </p>
                  <p className="text-xs text-gray-600">
                    2. Pega el enlace en la barra de direcciones (Ctrl+V o Cmd+V)
                  </p>
                  <p className="text-xs text-gray-600">
                    3. Verifica que se muestre correctamente la página de pago con todos los datos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.2: Pruebas recomendadas */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <TestTube2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              2.2 Pruebas recomendadas
            </h3>
            <p className="text-gray-600">
              Realiza una prueba completa para verificar que todo funciona
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
          <h4 className="font-semibold text-gray-900 mb-5">Procedimiento de prueba:</h4>
          
          <div className="space-y-4">
            {/* Prueba 1 */}
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Paso 1: Modificar precio de prueba</p>
                  <p className="text-sm text-gray-600">
                    Selecciona una habitación y una fecha lejana (por ejemplo, dentro de 6 meses). 
                    Cambia temporalmente el precio a un valor simbólico bajo, como <strong>$1 USD</strong> o 
                    <strong>$10 USD</strong>.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r mt-3">
                <p className="text-xs text-yellow-800">
                  <strong>Importante:</strong> Usa una fecha futura y un monto bajo para evitar 
                  afectar tus reservas reales y no perder dinero en comisiones.
                </p>
              </div>
            </div>

            {/* Prueba 2 */}
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3">
                <Link2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Paso 2: Generar el enlace</p>
                  <p className="text-sm text-gray-600">
                    Sigue el proceso descrito en la sección 2.1 para generar el enlace de pago 
                    manualmente desde el cotizador.
                  </p>
                </div>
              </div>
            </div>

            {/* Prueba 3 */}
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Paso 3: Completar el pago</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Abre el enlace generado y completa el proceso de pago usando una tarjeta de prueba 
                    o una tarjeta real (según lo que permita tu procesador de pagos).
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Algunos procesadores como Stripe y Mercado Pago ofrecen tarjetas de prueba para 
                    este tipo de validaciones.
                  </p>
                </div>
              </div>
            </div>

            {/* Prueba 4 */}
            <div className="bg-white rounded-lg p-5 border-2 border-blue-400 shadow-sm">
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Paso 4: Validar registro de datos</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Una vez completado el pago, verifica lo siguiente:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        El dinero llegó correctamente al método de pago configurado 
                        (Mercado Pago, Stripe, etc.)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        La reserva se registró en WeSpeak con todos los datos correctos 
                        (fechas, huésped, monto)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        <strong>Si tienes integración completa:</strong> La reserva también 
                        se cargó en tu sistema de gestión hotelera (PMS)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prueba 5 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 shadow-md">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Paso 5: Contactar a soporte</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Una vez que hayas completado las pruebas exitosamente, debes contactar 
                    al equipo de soporte de WeSpeak para:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Informar que finalizaste las validaciones</li>
                    <li>Reportar cualquier error o inconsistencia encontrada</li>
                    <li>Solicitar la activación de la entrega automática de enlaces</li>
                  </ul>
                  <div className="mt-3 bg-purple-100 border border-purple-300 rounded p-3">
                    <p className="text-xs text-purple-900 font-medium">
                      ⚠️ Este paso es OBLIGATORIO. No podrás avanzar a la Etapa 3 sin la 
                      confirmación del equipo de soporte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Final */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Check className="w-6 h-6 text-green-600" />
          Checklist: Etapa 2 Completada
        </h3>
        <p className="text-gray-600 mb-6">
          Verifica que hayas completado todos los pasos antes de contactar a soporte.
        </p>
        
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.proceso}
              onChange={() => toggleCheck('proceso')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.proceso ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Sé cómo generar un enlace de pago manual desde el cotizador (seguí los 9 pasos)
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.prueba}
              onChange={() => toggleCheck('prueba')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.prueba ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Realicé una prueba de pago completa con un monto simbólico
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.validacion}
              onChange={() => toggleCheck('validacion')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.validacion ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Validé que el dinero llegó, la reserva se cargó en WeSpeak y (si aplica) en mi sistema hotelero
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.soporte}
              onChange={() => toggleCheck('soporte')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.soporte ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Contacté al equipo de soporte de WeSpeak para informar que completé las pruebas
            </span>
          </label>
        </div>

        {Object.values(checklist).every(v => v) && (
          <div className="mt-6 bg-green-600 text-white p-4 rounded-lg text-center">
            <p className="font-semibold">¡Etapa 2 completada! 🎉</p>
            <p className="text-sm mt-1">
              Espera la confirmación de soporte antes de avanzar a la Etapa 3
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
