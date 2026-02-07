import { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Zap, 
  Settings, 
  MessageSquare,
  AlertCircle,
  Check,
  CheckCircle2,
  Clock,
  Bot,
  TrendingUp,
  Shield,
  Target
} from 'lucide-react';

export function Etapa3() {
  const [checklist, setChecklist] = useState({
    activacion: false,
    pruebas: false,
    ajustes: false,
    produccion: false
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 sm:p-8 lg:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Etapa 3 de 3 - Final
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Activación de Entrega Automática
        </h2>
        <p className="text-lg text-gray-600">
          El agente ahora entregará enlaces de pago de forma automática
        </p>
      </div>

      {/* Objetivo */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-r-xl mb-8">
        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-600" />
          Objetivo de esta etapa
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Habilitar el comportamiento automático del agente WeSpeak para que entregue enlaces 
          de pago a los huéspedes durante las conversaciones, sin necesidad de intervención manual.
        </p>
      </div>

      {/* Section 1: Proceso de activación */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              1. Proceso de activación
            </h3>
            <p className="text-gray-600">
              Cómo se activa la funcionalidad automática
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 space-y-4">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2">
                  Paso 1: Notificar a soporte
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Una vez que completaste todas las pruebas de la Etapa 2, debes contactar al 
                  equipo de soporte de WeSpeak e informar que:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                  <li>Finalizaste todas las validaciones exitosamente</li>
                  <li>Los pagos se registran correctamente</li>
                  <li>Las reservas aparecen en WeSpeak y en tu sistema (si aplica)</li>
                  <li>Estás listo para activar la automatización</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2">
                  Paso 2: Esperar confirmación de activación
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  El equipo de soporte revisará tu configuración y activará la funcionalidad 
                  automática del agente. Este proceso puede tomar entre <strong>24 a 48 horas</strong>.
                </p>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
                  <p className="text-xs text-yellow-900">
                    <strong>⏳ Importante:</strong> No intentes activar la automatización por tu cuenta. 
                    Solo el equipo de soporte puede habilitar esta funcionalidad de forma segura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-400 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2">
                  Paso 3: Confirmación recibida
                </p>
                <p className="text-sm text-gray-700">
                  Recibirás una notificación por correo electrónico o dentro de la plataforma 
                  confirmando que la entrega automática de enlaces de pago está <strong>ACTIVA</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Una vez activado */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              2. Una vez activado el agente automático
            </h3>
            <p className="text-gray-600">
              Realiza simulaciones para verificar el comportamiento
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
          <h4 className="font-semibold text-gray-900 mb-4">Proceso de verificación:</h4>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border border-purple-200">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    Acceder al apartado de "Pruebas" en WeSpeak
                  </p>
                  <p className="text-sm text-gray-600">
                    La plataforma WeSpeak cuenta con una sección de pruebas o simulación donde puedes 
                    probar el agente sin afectar conversaciones reales con huéspedes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-purple-200">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    Realizar simulaciones de conversación
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Simula conversaciones como si fueras un huésped interesado en reservar:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-xs text-gray-700">
                      <strong>Ejemplo 1:</strong> "Hola, quisiera reservar una habitación doble para el 15 de marzo"
                    </p>
                    <p className="text-xs text-gray-700">
                      <strong>Ejemplo 2:</strong> "¿Tienen disponibilidad para 2 adultos del 10 al 15 de abril?"
                    </p>
                    <p className="text-xs text-gray-700">
                      <strong>Ejemplo 3:</strong> "Me interesa conocer los precios y hacer una reserva"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400 shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    Verificar entrega automática del enlace
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Durante la conversación de prueba, el agente debe:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Identificar la intención de reserva del huésped
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Mostrar opciones de habitaciones disponibles
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Generar y entregar automáticamente el enlace de pago al huésped
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Incluir un mensaje claro con instrucciones sobre cómo completar el pago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ajustes finales */}
      <section className="mb-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              3. Ajustes finales y personalización
            </h3>
            <p className="text-gray-600">
              Optimiza el comportamiento del agente
            </p>
          </div>
        </div>

        <div className="ml-0 sm:ml-13 bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
          <p className="text-gray-700 mb-4">
            Una vez que el agente esté activo, puedes realizar ajustes para mejorar la experiencia 
            del huésped. Trabaja con el equipo de soporte para personalizar:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-600" />
                Mensajes del agente
              </p>
              <p className="text-sm text-gray-600">
                Personaliza el tono, estilo y contenido de los mensajes que envía el agente 
                junto con el enlace de pago.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                Timing de entrega
              </p>
              <p className="text-sm text-gray-600">
                Define en qué momento de la conversación debe entregarse el enlace 
                (inmediatamente, después de confirmar detalles, etc.).
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600" />
                Recordatorios
              </p>
              <p className="text-sm text-gray-600">
                Configura recordatorios automáticos si el huésped no completa el pago 
                en un tiempo determinado.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-600" />
                Instrucciones específicas
              </p>
              <p className="text-sm text-gray-600">
                Agrega información adicional como políticas de cancelación o instrucciones 
                de check-in en el mensaje.
              </p>
            </div>
          </div>

          <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>💡 Tip:</strong> Estos ajustes se realizan en conjunto con el equipo de soporte. 
              No requieren conocimientos técnicos de tu parte.
            </p>
          </div>
        </div>
      </section>

      {/* Resumen: Antes vs Después */}
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Antes vs Después de la automatización
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Antes */}
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Antes (Etapa 1 y 2)
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-red-900">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <span>Generación manual de cada enlace desde el cotizador</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-red-900">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <span>Necesitas copiar y pegar el enlace en la conversación</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-red-900">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <span>Mayor tiempo de respuesta al huésped</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-red-900">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <span>Riesgo de error humano al ingresar datos</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-red-900">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <span>Requiere estar disponible para responder</span>
              </li>
            </ul>
          </div>

          {/* Después */}
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-400 shadow-md">
            <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Después (Etapa 3 - Activo)
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-green-900">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>El agente genera y envía enlaces automáticamente</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-green-900">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>Respuestas instantáneas 24/7, incluso mientras duermes</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-green-900">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>Mayor tasa de conversión de consultas a reservas</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-green-900">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>Proceso estandarizado sin errores</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-green-900">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>Liberas tiempo para otras tareas del hotel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Buenas prácticas para el uso diario
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Monitorea las conversaciones regularmente
              </p>
              <p className="text-sm text-gray-600">
                Aunque el agente funciona automáticamente, revisa las conversaciones para 
                detectar consultas especiales o situaciones que requieran atención humana.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Verifica los pagos pendientes
              </p>
              <p className="text-sm text-gray-600">
                Establece una rutina diaria para revisar qué enlaces fueron enviados y cuáles 
                fueron completados, para hacer seguimiento de reservas no concretadas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-blue-600" />
                Actualiza precios y disponibilidad
              </p>
              <p className="text-sm text-gray-600">
                Mantén tu inventario y precios actualizados en el sistema para que el agente 
                siempre ofrezca información correcta.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                Intervén cuando sea necesario
              </p>
              <p className="text-sm text-gray-600">
                Si un huésped tiene dudas complejas o solicita algo especial, no dudes en 
                tomar el control de la conversación manualmente.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                Solicita soporte cuando lo necesites
              </p>
              <p className="text-sm text-gray-600">
                El equipo de WeSpeak está disponible para ayudarte con ajustes, dudas o 
                mejoras en el comportamiento del agente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Final */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Check className="w-6 h-6 text-green-600" />
          Checklist: Etapa 3 Completada
        </h3>
        <p className="text-gray-600 mb-6">
          Verifica que todo esté funcionando correctamente antes de usar el sistema en producción.
        </p>
        
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.activacion}
              onChange={() => toggleCheck('activacion')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.activacion ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Recibí la confirmación del equipo de soporte de que la automatización está activa
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.pruebas}
              onChange={() => toggleCheck('pruebas')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.pruebas ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Realicé simulaciones en el apartado de "Pruebas" y verifiqué que el agente entrega enlaces automáticamente
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.ajustes}
              onChange={() => toggleCheck('ajustes')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.ajustes ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              He realizado (o decidí no realizar) ajustes de personalización con el equipo de soporte
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checklist.produccion}
              onChange={() => toggleCheck('produccion')}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className={`flex-1 ${checklist.produccion ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              Entiendo las buenas prácticas y estoy listo para usar el sistema con huéspedes reales
            </span>
          </label>
        </div>

        {Object.values(checklist).every(v => v) && (
          <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-6 h-6" />
              <p className="text-xl font-bold">¡Implementación Completada! 🎉</p>
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="text-sm mt-2">
              Tu agente WeSpeak está completamente configurado y listo para automatizar 
              la entrega de enlaces de pago. ¡Felicitaciones!
            </p>
          </div>
        )}
      </section>

      {/* Mensaje final */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 text-center">
        <h4 className="font-bold text-gray-900 mb-2">
          ¡Bienvenido a la automatización hotelera!
        </h4>
        <p className="text-sm text-gray-700">
          Has completado todo el proceso de onboarding. Ahora puedes concentrarte en brindar 
          una excelente experiencia a tus huéspedes mientras WeSpeak se encarga de las reservas y pagos.
        </p>
      </div>
    </div>
  );
}
