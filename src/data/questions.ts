const questionsData = {

    "examModel1": {
      "questions": [
        {
          "id": 1,
          "question": "¿Cuántas cámaras componen el Congreso de los Estados Unidos?",
          "options": ["1", "2", "3", "4"],
          "correctAnswer": "2"
        },
        {
          "id": 2,
          "question": "¿Cuál de las siguientes ramas es responsable de crear leyes de inmigración?",
          "options": ["Poder Ejecutivo", "Poder Legislativo", "Poder Judicial", "Departamento de Justicia"],
          "correctAnswer": "Poder Legislativo"
        },
        {
          "id": 3,
          "question": "¿Qué papel juega el Poder Ejecutivo en la implementación de las leyes de inmigración?",
          "options": ["Proponer cambios legislativos", "Implementar y hacer cumplir las leyes de inmigración", "Revisar leyes y declararlas inconstitucionales", "Interpretar las leyes"],
          "correctAnswer": "Implementar y hacer cumplir las leyes de inmigración"
        },
        {
          "id": 4,
          "question": "¿Qué agencia del gobierno federal se encarga de supervisar la inmigración y la protección de las fronteras?",
          "options": ["Departamento de Estado", "DHS (Departamento de Seguridad Nacional)", "FBI", "Departamento de Justicia"],
          "correctAnswer": "DHS (Departamento de Seguridad Nacional)"
        },
        {
          "id": 5,
          "question": "El Departamento de Justicia está a cargo de una oficina que maneja los tribunales de inmigración. ¿Cuál es?",
          "options": ["ICE", "EOIR", "USCIS", "CBP"],
          "correctAnswer": "EOIR"
        },
        {
          "id": 6,
          "question": "¿Qué rama del gobierno puede bloquear órdenes ejecutivas relacionadas con inmigración si las considera inconstitucionales?",
          "options": ["Poder Legislativo", "Poder Ejecutivo", "Poder Judicial", "Departamento de Estado"],
          "correctAnswer": "Poder Judicial"
        },
        {
          "id": 7,
          "question": "¿Qué enmienda de la Constitución de los EE. UU. garantiza derechos básicos a todas las personas en EE. UU., independientemente de su estatus migratorio?",
          "options": ["Primera Enmienda", "Cuarta Enmienda", "Quinta Enmienda", "Decimocuarta Enmienda"],
          "correctAnswer": "Decimocuarta Enmienda"
        },
        {
          "id": 8,
          "question": "¿Qué formulario debe utilizarse para solicitar el ajuste de estatus a residente permanente?",
          "options": ["I-765", "I-485", "I-130", "I-94"],
          "correctAnswer": "I-485"
        },
        {
          "id": 9,
          "question": "¿Qué organización establece las regulaciones de las visas de trabajo y estudios para extranjeros en los EE. UU.?",
          "options": ["Departamento de Seguridad Nacional (DHS)", "Departamento de Justicia", "Departamento de Estado", "Corte Suprema"],
          "correctAnswer": "Departamento de Seguridad Nacional (DHS)"
        },
        {
          "id": 10,
          "question": "¿Cuál de las siguientes NO es una función del Poder Judicial en asuntos de inmigración?",
          "options": ["Resolver disputas de inmigración", "Declarar inconstitucionales las leyes migratorias", "Proponer cambios a las leyes de inmigración", "Evaluar apelaciones en casos de inmigración"],
          "correctAnswer": "Proponer cambios a las leyes de inmigración"
        },
        {
          "id": 11,
          "question": "¿Cuál es el papel del Congreso en la creación de leyes de inmigración?",
          "options": ["Implementar leyes", "Proponer y aprobar nuevas leyes de inmigración", "Revisar las decisiones de USCIS", "Expedir visas y permisos"],
          "correctAnswer": "Proponer y aprobar nuevas leyes de inmigración"
        },
        {
          "id": 12,
          "question": "¿Qué agencia dentro del DHS se encarga de proteger las fronteras?",
          "options": ["ICE", "CBP", "USCIS", "EOIR"],
          "correctAnswer": "CBP"
        },
        {
          "id": 13,
          "question": "¿Qué autoridad tiene el Congreso en relación con la inmigración?",
          "options": ["Implementar las leyes directamente", "Crear y aprobar legislación de inmigración", "Proponer cambios sin la aprobación del presidente", "Supervisar las audiencias de deportación"],
          "correctAnswer": "Crear y aprobar legislación de inmigración"
        },
        {
          "id": 14,
          "question": "¿Quién tiene la última palabra sobre la interpretación de las leyes migratorias en los Estados Unidos?",
          "options": ["USCIS", "El presidente", "El Tribunal Supremo", "El Congreso"],
          "correctAnswer": "El Tribunal Supremo"
        },
        {
          "id": 15,
          "question": "¿Cuál de las siguientes NO es una función de CBP (Customs and Border Protection)?",
          "options": ["Supervisar las fronteras", "Emitir permisos de trabajo", "Inspeccionar personas y bienes en los puertos de entrada", "Aplicar las leyes aduaneras"],
          "correctAnswer": "Emitir permisos de trabajo"
        },
        {
          "id": 16,
          "question": "¿Qué formulario utiliza un empleador para verificar el estatus legal de un trabajador en EE. UU.?",
          "options": ["I-485", "I-94", "I-9", "N-400"],
          "correctAnswer": "I-9"
        },
        {
          "id": 17,
          "question": "¿Qué organismo judicial tiene la facultad de manejar casos de deportación y otras decisiones migratorias?",
          "options": ["USCIS", "EOIR", "ICE", "FBI"],
          "correctAnswer": "EOIR"
        },
        {
          "id": 18,
          "question": "¿Cuál es la función principal de la Oficina de Apelaciones Administrativas (AAO)?",
          "options": ["Revisar y decidir apelaciones en ciertos casos de inmigración", "Procesar solicitudes de asilo", "Emitir permisos de trabajo", "Supervisar audiencias de deportación"],
          "correctAnswer": "Revisar y decidir apelaciones en ciertos casos de inmigración"
        },
        {
          "id": 19,
          "question": "¿Quién tiene la autoridad de emitir visas para extranjeros que deseen ingresar a EE. UU.?",
          "options": ["CBP", "USCIS", "Embajadas y consulados de EE. UU. en el extranjero", "ICE"],
          "correctAnswer": "Embajadas y consulados de EE. UU. en el extranjero"
        },
        {
          "id": 20,
          "question": "¿Qué agencia gubernamental tiene la responsabilidad de supervisar las políticas de seguridad nacional, incluyendo inmigración?",
          "options": ["DHS", "Departamento de Estado", "Departamento de Justicia", "FBI"],
          "correctAnswer": "DHS"
        },
        {
          "id": 21,
          "question": "¿Qué agencia es responsable de manejar las solicitudes de asilo dentro de EE. UU.?",
          "options": ["CBP", "ICE", "USCIS", "EOIR"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 22,
          "question": "¿Cuál es la función principal de ICE (Immigration and Customs Enforcement)?",
          "options": ["Emitir visas y permisos", "Aplicar las leyes de inmigración dentro de EE. UU.", "Supervisar las fronteras terrestres", "Revisar apelaciones de inmigración"],
          "correctAnswer": "Aplicar las leyes de inmigración dentro de EE. UU."
        },
        {
          "id": 23,
          "question": "¿Qué agencia del DHS es responsable de revisar la entrada de personas y bienes en los puntos de entrada a EE. UU.?",
          "options": ["ICE", "EOIR", "CBP", "USCIS"],
          "correctAnswer": "CBP"
        },
        {
          "id": 24,
          "question": "¿Qué agencia es responsable de manejar las solicitudes de ciudadanía para inmigrantes?",
          "options": ["EOIR", "USCIS", "ICE", "CBP"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 25,
          "question": "¿Qué organismo dentro del Departamento de Justicia maneja los tribunales de inmigración?",
          "options": ["USCIS", "ICE", "EOIR", "CBP"],
          "correctAnswer": "EOIR"
        },
        {
          "id": 26,
          "question": "¿Cuál de las siguientes agencias NO es parte del Departamento de Seguridad Nacional (DHS)?",
          "options": ["USCIS", "ICE", "CBP", "EOIR"],
          "correctAnswer": "EOIR"
        },
        {
          "id": 27,
          "question": "¿Qué significa el acrónimo 'USCIS'?",
          "options": ["United States Citizenship and Immigration Service", "United States Custom Immigration Services", "United States Citizenship and Immigration Services", "Universal Service for Citizenship and Immigration"],
          "correctAnswer": "United States Citizenship and Immigration Services"
        },
        {
          "id": 28,
          "question": "¿Cuál es la función del Tribunal de Apelaciones de Inmigración (BIA)?",
          "options": ["Revisar y decidir apelaciones de casos de inmigración", "Emitir decisiones judiciales sobre casos criminales", "Revisar las solicitudes de permisos de trabajo", "Asistir en la emisión de visas de inmigración"],
          "correctAnswer": "Revisar y decidir apelaciones de casos de inmigración"
        },
        {
          "id": 29,
          "question": "¿Qué oficina es responsable de la detención y deportación de inmigrantes que están en EE.UU. sin permiso legal?",
          "options": ["USCIS", "ICE", "CBP", "EOIR"],
          "correctAnswer": "ICE"
        },
        {
          "id": 30,
          "question": "¿Cuál de las siguientes agencias maneja las apelaciones de decisiones tomadas por USCIS?",
          "options": ["CBP", "ICE", "AAO (Administrative Appeals Office)", "EOIR"],
          "correctAnswer": "AAO (Administrative Appeals Office)"
        },
        {
          "id": 31,
          "question": "¿Qué función cumple el Departamento de Estado en el proceso de inmigración?",
          "options": ["Revisar solicitudes de asilo dentro de EE. UU.", "Emitir visas en embajadas y consulados en el extranjero", "Procesar apelaciones de inmigración", "Supervisar la entrada y salida de personas a través de las fronteras"],
          "correctAnswer": "Emitir visas en embajadas y consulados en el extranjero"
        },
        {
          "id": 32,
          "question": "¿Qué documento es necesario para que un residente permanente solicite la ciudadanía?",
          "options": ["I-765", "N-400", "I-485", "I-9"],
          "correctAnswer": "N-400"
        },
        {
          "id": 33,
          "question": "¿Qué agencia supervisa los casos en los que los extranjeros solicitan la ciudadanía estadounidense?",
          "options": ["ICE", "USCIS", "CBP", "EOIR"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 34,
          "question": "¿Cuál es la función de la Oficina de Audiencias de Remoción dentro de EOIR?",
          "options": ["Revisar apelaciones de solicitudes de visa denegadas", "Conducir audiencias de deportación", "Procesar solicitudes de permiso de trabajo", "Revisar peticiones de ajuste de estatus"],
          "correctAnswer": "Conducir audiencias de deportación"
        },
        {
          "id": 35,
          "question": "¿Qué agencia es responsable de emitir permisos de trabajo a inmigrantes dentro de EE. UU.?",
          "options": ["USCIS", "ICE", "CBP", "EOIR"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 36,
          "question": "¿Qué formulario se utiliza para solicitar la Acción Diferida para los Llegados en la Infancia (DACA)?",
          "options": ["I-821D", "I-765", "I-485", "N-400"],
          "correctAnswer": "I-821D"
        },
        {
          "id": 37,
          "question": "¿Qué significa el acrónimo 'EOIR'?",
          "options": ["Executive Office for Immigration Reform", "Executive Office for Immigration Review", "Employment Office of Immigration Review", "Executive Office for Immigration Resources"],
          "correctAnswer": "Executive Office for Immigration Review"
        },
        {
          "id": 38,
          "question": "¿Qué agencia es responsable de realizar inspecciones en los puertos de entrada a EE. UU.?",
          "options": ["ICE", "EOIR", "CBP", "USCIS"],
          "correctAnswer": "CBP"
        },
        {
          "id": 39,
          "question": "¿Qué agencia maneja las solicitudes de visas de inmigrantes fuera de los EE. UU.?",
          "options": ["CBP", "EOIR", "Embajadas y consulados de EE. UU.", "USCIS"],
          "correctAnswer": "Embajadas y consulados de EE. UU."
        },
        {
          "id": 40,
          "question": "¿Qué formulario se utiliza para solicitar un permiso de viaje en EE. UU. si el solicitante tiene un estatus de ajuste pendiente?",
          "options": ["I-765", "I-131", "I-485", "N-400"],
          "correctAnswer": "I-131"
        },
        {
          "id": 41,
          "question": "¿Qué agencia maneja las solicitudes de asilo para inmigrantes ya presentes en los EE. UU.?",
          "options": ["ICE", "EOIR", "CBP", "USCIS"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 42,
          "question": "¿Qué agencia tiene la responsabilidad de manejar las solicitudes de inmigrantes para el ajuste de estatus?",
          "options": ["ICE", "USCIS", "CBP", "EOIR"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 43,
          "question": "¿Cuál de las siguientes NO es una visa de inmigrante?",
          "options": ["H-1B", "EB-3", "IR-1", "EB-5"],
          "correctAnswer": "H-1B"
        },
        {
          "id": 44,
          "question": "¿Qué agencia supervisa los casos de deportación que llegan a los tribunales de inmigración?",
          "options": ["USCIS", "ICE", "EOIR", "CBP"],
          "correctAnswer": "EOIR"
        },
        {
          "id": 45,
          "question": "¿Qué tipo de visa se emite para inversores que desean residir permanentemente en EE.UU. a través de una inversión significativa?",
          "options": ["F-1", "J-1", "EB-5", "O-1"],
          "correctAnswer": "EB-5"
        },
        {
          "id": 46,
          "question": "¿Qué agencia maneja las apelaciones en los casos de inmigración cuando una solicitud ha sido denegada?",
          "options": ["USCIS", "ICE", "EOIR", "AAO (Administrative Appeals Office)"],
          "correctAnswer": "AAO (Administrative Appeals Office)"
        },
        {
          "id": 47,
          "question": "¿Qué significa el acrónimo 'DHS'?",
          "options": ["Department of Human Services", "Department of Homeland Security", "Department of Human Security", "Department of Homeland Services"],
          "correctAnswer": "Department of Homeland Security"
        },
        {
          "id": 48,
          "question": "¿Qué agencia tiene la responsabilidad de deportar a los inmigrantes que están presentes en los EE. UU. de manera ilegal?",
          "options": ["USCIS", "EOIR", "ICE", "CBP"],
          "correctAnswer": "ICE"
        },
        {
          "id": 49,
          "question": "¿Cuál de las siguientes NO es una agencia bajo el Departamento de Seguridad Nacional (DHS)?",
          "options": ["USCIS", "ICE", "CBP", "IRS"],
          "correctAnswer": "IRS"
        },
        {
          "id": 50,
          "question": "¿Qué agencia es responsable de revisar las solicitudes de visas en embajadas y consulados fuera de los EE. UU.?",
          "options": ["USCIS", "Departamento de Estado (DoS)", "CBP", "ICE"],
          "correctAnswer": "Departamento de Estado (DoS)"
        },
        {
          "id": 51,
          "question": "¿Cuál de las siguientes es una visa de no inmigrante que permite a los extranjeros estudiar en los EE. UU.?",
          "options": ["H-1B", "F-1", "EB-3", "K-1"],
          "correctAnswer": "F-1"
        },
        {
          "id": 52,
          "question": "¿Cuál es la visa que se otorga a los trabajadores temporales especializados en EE. UU.?",
          "options": ["F-1", "J-1", "H-1B", "B-2"],
          "correctAnswer": "H-1B"
        },
        {
          "id": 53,
          "question": "¿Qué tipo de visa permite la entrada de empresarios o inversores extranjeros que buscan establecer una empresa en EE. UU.?",
          "options": ["EB-5", "L-1", "H-2A", "E-2"],
          "correctAnswer": "E-2"
        },
        {
          "id": 54,
          "question": "¿Cuál de las siguientes visas es utilizada por los trabajadores agrícolas temporales?",
          "options": ["L-1", "H-2A", "F-1", "O-1"],
          "correctAnswer": "H-2A"
        },
        {
          "id": 55,
          "question": "¿Qué visa permite la reunificación familiar para los cónyuges de ciudadanos estadounidenses?",
          "options": ["IR-1", "B-2", "F-2A", "H-1B"],
          "correctAnswer": "IR-1"
        },
        {
          "id": 56,
          "question": "¿Qué visa se otorga a los estudiantes de intercambio que participan en programas educativos en EE.UU.?",
          "options": ["F-1", "B-1", "J-1", "L-1"],
          "correctAnswer": "J-1"
        },
        {
          "id": 57,
          "question": "¿Cuál es la visa diseñada para artistas, atletas y personas con habilidades extraordinarias?",
          "options": ["O-1", "P-1", "Q-1", "F-1"],
          "correctAnswer": "O-1"
        },
        {
          "id": 58,
          "question": "¿Cuál de las siguientes NO es una visa de inmigrante?",
          "options": ["EB-5", "F-1", "IR-1", "EB-3"],
          "correctAnswer": "F-1"
        },
        {
          "id": 59,
          "question": "¿Qué tipo de visa permite la entrada de visitantes por razones de turismo o negocios por corto plazo?",
          "options": ["B-2", "J-1", "L-1", "O-1"],
          "correctAnswer": "B-2"
        },
        {
          "id": 60,
          "question": "¿Cuál es el propósito de la visa K-1?",
          "options": ["Permitir que el prometido(a) de un ciudadano estadounidense ingrese a EE. UU. para casarse", "Permitir a un inversor establecer una empresa en EE. UU.", "Otorgar residencia permanente a cónyuges de residentes permanentes", "Permitir la entrada a trabajadores temporales"],
          "correctAnswer": "Permitir que el prometido(a) de un ciudadano estadounidense ingrese a EE. UU. para casarse"
        },
        {
          "id": 61,
          "question": "¿Qué visa se otorga a personas que desean participar en programas culturales de intercambio en EE. UU.?",
          "options": ["B-2", "J-1", "H-2B", "F-1"],
          "correctAnswer": "J-1"
        },
        {
          "id": 62,
          "question": "¿Qué visa permite a los trabajadores especializados transferidos dentro de una misma empresa ingresar a EE. UU.?",
          "options": ["L-1", "E-2", "H-1B", "F-1"],
          "correctAnswer": "L-1"
        },
        {
          "id": 63,
          "question": "¿Qué visa permite la entrada de trabajadores temporales no especializados para trabajos agrícolas?",
          "options": ["H-2A", "H-1B", "L-1", "F-1"],
          "correctAnswer": "H-2A"
        },
        {
          "id": 64,
          "question": "¿Qué visa permite a un ciudadano estadounidense traer a su cónyuge que aún reside en el extranjero?",
          "options": ["IR-1", "F-2A", "K-3", "H-1B"],
          "correctAnswer": "K-3"
        },
        {
          "id": 65,
          "question": "¿Cuál es la visa utilizada por turistas que desean visitar EE.UU. por placer?",
          "options": ["B-2", "L-1", "F-1", "J-1"],
          "correctAnswer": "B-2"
        },
        {
          "id": 66,
          "question": "¿Qué visa es utilizada por las empresas para traer a profesionales que trabajen temporalmente en EE. UU.?",
          "options": ["H-1B", "B-2", "O-1", "K-1"],
          "correctAnswer": "H-1B"
        },
        {
          "id": 67,
          "question": "¿Qué visa se utiliza para permitir la entrada temporal de visitantes de negocios a EE. UU.?",
          "options": ["F-1", "B-1", "O-1", "H-2B"],
          "correctAnswer": "B-1"
        },
        {
          "id": 68,
          "question": "¿Qué visa de no inmigrante permite la entrada de empleados transferidos dentro de una empresa multinacional?",
          "options": ["L-1", "E-2", "F-1", "K-1"],
          "correctAnswer": "L-1"
        },
        {
          "id": 69,
          "question": "¿Qué visa de inmigrante permite a los familiares inmediatos de ciudadanos estadounidenses obtener la residencia permanente?",
          "options": ["EB-3", "IR-1", "F-1", "H-1B"],
          "correctAnswer": "IR-1"
        },
        {
          "id": 70,
          "question": "¿Qué visa permite la entrada de trabajadores especializados en el área de cultura y deportes a los EE. UU.?",
          "options": ["Q-1", "P-1", "O-1", "J-1"],
          "correctAnswer": "P-1"
        },
        {
          "id": 71,
          "question": "¿Cuál de las siguientes acciones está prohibida para un preparador de formularios de inmigración?",
          "options": ["Ayudar en la organización de los documentos", "Explicar los términos básicos del formulario", "Proporcionar asesoría legal", "Cobrar una tarifa por los servicios prestados"],
          "correctAnswer": "Proporcionar asesoría legal"
        },
        {
          "id": 72,
          "question": "¿Qué debe hacer un preparador si descubre que un cliente ha proporcionado información incorrecta en un formulario?",
          "options": ["Proseguir con la presentación", "Informar al cliente que debe corregir la información", "Modificar la información incorrecta", "Ignorar la discrepancia"],
          "correctAnswer": "Informar al cliente que debe corregir la información"
        },
        {
          "id": 73,
          "question": "¿Qué límite ético tiene un preparador de formularios de inmigración?",
          "options": ["Ayudar a completar los formularios", "Proporcionar asesoría sobre cómo presentar documentos", "Explicar los términos básicos del formulario", "Proporcionar asesoría legal al cliente"],
          "correctAnswer": "Proporcionar asesoría legal al cliente"
        },
        {
          "id": 74,
          "question": "¿Qué debe hacer un preparador si el cliente solicita que se omita información importante en un formulario?",
          "options": ["Seguir las instrucciones del cliente", "Informar al cliente de las consecuencias legales y negarse a completar el formulario", "Continuar con el formulario sin cambios", "Llamar a USCIS para denunciar al cliente"],
          "correctAnswer": "Informar al cliente de las consecuencias legales y negarse a completar el formulario"
        },
        {
          "id": 75,
          "question": "¿Qué acción está permitida para un preparador de formularios de inmigración?",
          "options": ["Asesorar sobre las opciones de inmigración del cliente", "Proporcionar asistencia en la preparación de formularios", "Ofrecer servicios legales", "Ayudar al cliente a elaborar un plan legal"],
          "correctAnswer": "Proporcionar asistencia en la preparación de formularios"
        },
        {
          "id": 76,
          "question": "¿Cuál es la responsabilidad de un preparador de formularios de inmigración al recibir documentación incompleta de un cliente?",
          "options": ["Completar el formulario con la información disponible", "Aconsejar al cliente que presente el formulario incompleto", "Informar al cliente que debe reunir toda la documentación correcta antes de proceder", "Proseguir con el caso sin más preguntas"],
          "correctAnswer": "Informar al cliente que debe reunir toda la documentación correcta antes de proceder"
        },
        {
          "id": 77,
          "question": "¿Qué acción está prohibida para un preparador de formularios en relación con el manejo de los fondos del cliente?",
          "options": ["Cobrar una tarifa por servicios de preparación de formularios", "Recaudar y distribuir fondos para cubrir tarifas de inmigración", "Proporcionar recibos por servicios prestados", "Ayudar al cliente a llenar formularios relacionados con tarifas de inmigración"],
          "correctAnswer": "Recaudar y distribuir fondos para cubrir tarifas de inmigración"
        },
        {
          "id": 78,
          "question": "¿Qué debe hacer un preparador de formularios si el cliente solicita asesoría legal en medio del proceso?",
          "options": ["Proporcionar la asesoría legal necesaria", "Referir al cliente a un abogado de inmigración", "Continuar con la preparación del formulario", "Dar su opinión sobre el caso"],
          "correctAnswer": "Referir al cliente a un abogado de inmigración"
        },
        {
          "id": 79,
          "question": "¿Qué debe hacer un preparador si el cliente proporciona información falsa para un formulario de inmigración?",
          "options": ["Proseguir como si no hubiera ocurrido", "Informar al cliente de las consecuencias legales y negarse a continuar", "Completar el formulario con la información proporcionada", "Ignorar la situación si no afecta el caso"],
          "correctAnswer": "Informar al cliente de las consecuencias legales y negarse a continuar"
        },
        {
          "id": 80,
          "question": "¿Cuál es la prioridad de un preparador de formularios de inmigración al representar a un cliente?",
          "options": ["Completar el caso lo más rápido posible", "Cobrar la tarifa completa antes de empezar", "Asegurarse de que el caso se presente de manera ética y legal", "Evitar problemas con las autoridades"],
          "correctAnswer": "Asegurarse de que el caso se presente de manera ética y legal"
        },
        {
          "id": 81,
          "question": "¿Qué debe hacer un preparador si el cliente quiere cambiar la información proporcionada en un formulario después de que se ha enviado a USCIS?",
          "options": ["Ignorar la solicitud del cliente", "Aconsejar al cliente que se comunique con USCIS para hacer el cambio", "Cambiar la información y enviar una nueva solicitud", "Llamar directamente a USCIS para modificar el formulario"],
          "correctAnswer": "Aconsejar al cliente que se comunique con USCIS para hacer el cambio"
        },
        {
          "id": 82,
          "question": "¿Qué debe hacer un preparador si un cliente solicita asesoría sobre la elegibilidad de su solicitud de inmigración?",
          "options": ["Proporcionar asesoría basada en su experiencia", "Referir al cliente a un abogado o especialista legal", "Dar una opinión general sin comprometerse", "Modificar el formulario para ajustarlo a la situación del cliente"],
          "correctAnswer": "Referir al cliente a un abogado o especialista legal"
        },
        {
          "id": 83,
          "question": "¿Qué acción está permitida para un preparador de formularios de inmigración en relación con el asesoramiento de casos de deportación?",
          "options": ["Proporcionar detalles legales sobre la deportación", "Ayudar al cliente a redactar documentos relacionados con la deportación", "Representar al cliente en la corte de inmigración", "Proporcionar asesoría legal sobre las leyes de deportación"],
          "correctAnswer": "Ayudar al cliente a redactar documentos relacionados con la deportación"
        },
        {
          "id": 84,
          "question": "¿Qué debe hacer un preparador si un cliente le solicita que incluya información no verificada en un formulario?",
          "options": ["Incluir la información según las instrucciones del cliente", "Informar al cliente que solo se debe incluir información verificada", "Modificar el formulario y dejar constancia de que la información es incierta", "Continuar sin cambios, ya que es responsabilidad del cliente"],
          "correctAnswer": "Informar al cliente que solo se debe incluir información verificada"
        },
        {
          "id": 85,
          "question": "¿Cuál es la función principal de un preparador de formularios de inmigración?",
          "options": ["Asesorar legalmente al cliente en todos los aspectos del proceso", "Ayudar al cliente a completar correctamente los formularios de inmigración", "Interpretar las leyes de inmigración para el cliente", "Representar al cliente ante USCIS"],
          "correctAnswer": "Ayudar al cliente a completar correctamente los formularios de inmigración"
        },
        {
          "id": 86,
          "question": "¿Qué debe hacer un preparador si descubre que ha cometido un error en la preparación de un formulario de inmigración?",
          "options": ["Ignorar el error si no afecta el proceso", "Informar al cliente y corregir el error antes de presentarlo", "Esperar a que USCIS lo detecte", "Modificar el formulario sin notificar al cliente"],
          "correctAnswer": "Informar al cliente y corregir el error antes de presentarlo"
        },
        {
          "id": 87,
          "question": "¿Qué es lo que un preparador de formularios de inmigración debe evitar hacer para no violar los códigos de ética?",
          "options": ["Cobrar tarifas por servicios", "Ayudar al cliente a organizar los documentos", "Ofrecer asesoría legal a los clientes", "Explicar los formularios al cliente"],
          "correctAnswer": "Ofrecer asesoría legal a los clientes"
        },
        {
          "id": 88,
          "question": "¿Qué debe hacer un preparador si el cliente le pide que modifique un formulario para que USCIS no detecte un detalle importante?",
          "options": ["Seguir las instrucciones del cliente", "Modificar el formulario solo si el cliente lo pide por escrito", "Negarse a modificar el formulario e informar al cliente de las consecuencias legales", "Consultar a un abogado de inmigración sobre cómo proceder"],
          "correctAnswer": "Negarse a modificar el formulario e informar al cliente de las consecuencias legales"
        },
        {
          "id": 89,
          "question": "¿Qué documento debe recibir el cliente después de que un preparador complete un formulario de inmigración?",
          "options": ["Una copia del formulario completado", "Una carta de recomendación del preparador", "Un recibo detallado de los servicios", "Un certificado de aprobación del formulario"],
          "correctAnswer": "Una copia del formulario completado"
        },
        {
          "id": 90,
          "question": "¿Qué debe hacer un preparador si el cliente tiene dudas sobre las consecuencias legales de su solicitud de inmigración?",
          "options": ["Proporcionar su opinión personal sobre el caso", "Explicar las posibles consecuencias basadas en su experiencia", "Remitir al cliente a un abogado de inmigración para que reciba asesoría legal adecuada", "Ayudar al cliente a investigar el tema en línea"],
          "correctAnswer": "Remitir al cliente a un abogado de inmigración para que reciba asesoría legal adecuada"
        },
        {
          "id": 91,
          "question": "¿Qué oficina revisa y procesa las solicitudes de ciudadanía en los Estados Unidos?",
          "options": ["EOIR", "ICE", "USCIS", "CBP"],
          "correctAnswer": "USCIS"
        },
        {
          "id": 92,
          "question": "¿Qué formulario debe presentar un solicitante para obtener un permiso de trabajo si tiene un estatus de asilo pendiente?",
          "options": ["I-485", "I-765", "I-131", "N-400"],
          "correctAnswer": "I-765"
        },
        {
          "id": 93,
          "question": "¿Qué agencia del gobierno de EE. UU. maneja la emisión de visas temporales para no inmigrantes?",
          "options": ["USCIS", "CBP", "ICE", "Embajadas y consulados de EE. UU. en el extranjero"],
          "correctAnswer": "Embajadas y consulados de EE. UU. en el extranjero"
        },
        {
          "id": 94,
          "question": "¿Qué formulario debe completar un solicitante para pedir la reunificación familiar si es residente permanente?",
          "options": ["I-130", "I-485", "I-765", "N-600"],
          "correctAnswer": "I-130"
        },
        {
          "id": 95,
          "question": "¿Qué visa es necesaria para que un empleador estadounidense traiga a un trabajador temporalmente calificado a los EE. UU.?",
          "options": ["H-2A", "H-1B", "F-1", "J-1"],
          "correctAnswer": "H-1B"
        },
        {
          "id": 96,
          "question": "¿Qué documento es necesario para un residente permanente que quiere solicitar la ciudadanía estadounidense?",
          "options": ["I-131", "I-485", "N-400", "I-765"],
          "correctAnswer": "N-400"
        },
        {
          "id": 97,
          "question": "¿Qué visa es utilizada para los cónyuges de ciudadanos estadounidenses que buscan residencia permanente?",
          "options": ["K-1", "F-1", "IR-1", "H-1B"],
          "correctAnswer": "IR-1"
        },
        {
          "id": 98,
          "question": "¿Qué agencia se encarga de manejar las audiencias de deportación?",
          "options": ["EOIR", "ICE", "USCIS", "CBP"],
          "correctAnswer": "EOIR"
        },
        {
          "id": 99,
          "question": "¿Qué documento se necesita para solicitar la residencia permanente por motivos de empleo en los EE. UU.?",
          "options": ["I-130", "I-765", "I-485", "N-400"],
          "correctAnswer": "I-485"
        },
        {
          "id": 100,
          "question": "¿Qué agencia tiene la autoridad para emitir tarjetas verdes (Green Cards) a inmigrantes que solicitan la residencia permanente en los EE. UU.?",
          "options": ["USCIS", "CBP", "EOIR", "ICE"],
          "correctAnswer": "USCIS"
        }
      ]
    }
  }
  
  export default questionsData;