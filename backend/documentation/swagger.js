const data = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API KARIO-MEDIA-MD",
      description: "API multimedia",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8020",
        description: "URL de la API",
      },
    ],
    paths: {
      "/login/validate": {
            post: {
              summary: "Iniciar sesión de usuario",
              description:
                "Inicia sesión de un usuario con su correo electrónico y contraseña.",
              tags: ["Login"],
              requestBody: {
                description: "Credenciales de inicio de sesión",
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        email: {
                          type: "string",
                          description: "Correo electrónico del usuario",
                          example: "prueba@gmail.com",
                        },
                        password: {
                          type: "string",
                          description: "Contraseña del usuario",
                          example: "123456",
                        },
                      },
                    },
                  },
                },
              },
              responses: {
                200: {
                  description: "Inicio de sesión exitoso",
                  schema: {
                    type: "object",
                    properties: {
                      existeEmail: {
                        $ref: "#/definitions/Usuario",
                      },
                      token: {
                        type: "string",
                        description: "Token de autenticación",
                      },
                      success: {
                        type: "boolean",
                        description: "Indica si el inicio de sesión fue exitoso",
                      },
                      message: {
                        type: "string",
                        description: "Mensaje de éxito",
                      },
                    },
                  },
                },
                400: {
                  description: "Error en el inicio de sesión",
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                        description: "Mensaje de error",
                      },
                    },
                  },
                },
                default: {
                  description: "Error inesperado",
                },
              },
            },
      },
      "/register/Register": {
            post: {
              summary: "Registro de nuevo usuario",
              description: "Registra un nuevo usuario en la aplicación.",
              tags: ["Register"],
              requestBody: {
                description: "Datos de registro de usuario",
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/usuarios",
                    },
                  },
                },
              },
              responses: {
                200: {
                  description: "Usuario registrado exitosamente",
                },
                400: {
                  description: "Error en el registro de usuario",
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                        description: "Mensaje de error",
                      },
                    },
                  },
                },
                default: {
                  description: "Error inesperado",
                },
              },
            },
      },
      "/ayudas/all": {
        get: {
          summary: "Obtener todas las ayudas",
          description: "Obtiene todas las ayudas de la colección",
          tags: ["Ayudas"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Lista de ayudas",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/ayudas",
                    },
                  },
                },
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/ayudas/one/{id}": {
        get: {
          summary: "Obtener una ayuda por ID",
          description: "Obtiene una ayuda específica por su ID.",
          tags: ["Ayudas"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID de la ayuda a obtener",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Detalles de la ayuda",
              schema: {
                $ref: "#/components/schemas/ayudas",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/ayudas/post": {
        post: {
          summary: "Crear una nueva ayuda",
          description: "Crea una nueva ayuda.",
          tags: ["Ayudas"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos de la ayuda a crear",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ayudas",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ayuda creada exitosamente",
              schema: {
                $ref: "#/components/schemas/ayudas",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/ayudas/delete/{id}": {
        delete: {
          summary: "Eliminar una ayuda por ID",
          description: "Elimina una ayuda específica por su ID.",
          tags: ["Ayudas"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID de la ayuda a eliminar",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Ayuda eliminada exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/ayudas/put/{id}": {
        put: {
          summary: "Actualizar una ayuda por ID",
          description: "Actualiza una ayuda específica por su ID.",
          tags: ["Ayudas"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID de la ayuda a actualizar",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos de la ayuda actualizada",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ayudas",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ayuda actualizada exitosamente",
              schema: {
                $ref: "#/components/schemas/ayudas",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/indicadores/all": {
        get: {
          summary: "Obtener todos los indicadores",
          description: "Obtiene todos los indicadores disponibles.",
          tags: ["Indicadores"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Lista de indicadores",
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/indicadores",
                },
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/indicadores/one/{id}": {
        get: {
          summary: "Obtener un indicador por ID",
          description: "Obtiene un indicador específico por su ID.",
          tags: ["Indicadores"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del indicador a obtener",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Detalles del indicador",
              schema: {
                $ref: "#/components/schemas/indicadores",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/indicadores/post": {
        post: {
          summary: "Crear un nuevo indicador",
          description: "Crea un nuevo indicador.",
          tags: ["Indicadores"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos del indicador a crear",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/indicadores",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Indicador creado exitosamente",
              schema: {
                $ref: "#/components/schemas/ayudas",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/indicadores/delete/{id}": {
        delete: {
          summary: "Eliminar un indicador por ID",
          description: "Elimina un indicador específico por su ID.",
          tags: ["Indicadores"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del indicador a eliminar",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Indicador eliminado exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/indicadores/put/{id}": {
        put: {
          summary: "Actualizar un indicador por ID",
          description: "Actualiza un indicador específico por su ID.",
          tags: ["Indicadores"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del indicador a actualizar",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos del indicador actualizado",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/indicadores",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Indicador actualizado exitosamente",
              schema: {
                $ref: "#/components/schemas/indicadores",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/reportes/all": {
        get: {
          summary: "Obtener lista de reportes",
          description: "Obtiene una lista de reportes en la aplicación.",
          tags: ["Reportes"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Lista de reportes obtenida exitosamente",
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/reportes",
                },
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/reportes/one/{id}": {
        get: {
          summary: "Obtener un reporte por ID",
          description:
            "Obtiene los detalles de un reporte específico por su ID.",
          tags: ["Reportes"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del reporte a consultar",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Detalles del reporte obtenidos exitosamente",
              schema: {
                $ref: "#/components/schemas/reportes",
              },
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/reportes/post": {
        post: {
          summary: "Crear un nuevo reporte",
          description: "Crea un nuevo reporte en la aplicación.",
          tags: ["Reportes"],
          requestBody: {
            description: "Datos del reporte a crear",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/reportes",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Reporte creado exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/reportes/delete/{id}": {
        delete: {
          summary: "Eliminar un reporte por ID",
          description: "Elimina un reporte específico por su ID.",
          tags: ["Reportes"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del reporte a eliminar",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Reporte eliminado exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/reportes/put/{id}": {
        put: {
          summary: "Actualizar un reporte por ID",
          description: "Actualiza un reporte específico por su ID.",
          tags: ["Reportes"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del reporte a actualizar",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos del reporte a actualizar",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/reportes",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Reporte actualizado exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/usuarios/all": {
        get: {
          summary: "Obtener lista de usuarios",
          description:
            "Obtiene una lista de todos los usuarios registrados en el sistema.",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
              items: {
                $ref: "#/components/schemas/usuarios",
              },
            },
          ],
          responses: {
            200: {
              description: "Lista de usuarios obtenida exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/usuarios/one/{id}": {
        get: {
          summary: "Obtener información de un usuario",
          description:
            "Obtiene información detallada de un usuario según su ID.",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del usuario a consultar",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Información del usuario obtenida exitosamente",
              schema: {
                $ref: "#/components/schemas/usuarios",
              },
            },
            401: {
              description: "Token inválido",
            },
            404: {
              description: "Usuario no encontrado",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/usuarios/post": {
        post: {
          summary: "Crear un nuevo usuario",
          description: "Crea un nuevo usuario en el sistema.",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos del usuario a crear",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/usuarios",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Usuario creado exitosamente",
              schema: {
                $ref: "#/definitions/Usuario",
              },
            },
            400: {
              description: "Error en la solicitud",
            },
            401: {
              description: "Token inválido",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/usuarios/delete/{id}": {
        delete: {
          summary: "Eliminar un usuario",
          description: "Elimina un usuario existente del sistema.",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del usuario a eliminar",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Usuario eliminado exitosamente",
            },
            401: {
              description: "Token inválido",
            },
            404: {
              description: "Usuario no encontrado",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
      "/usuarios/put/{id}": {
        put: {
          summary: "Actualizar un usuario",
          description:
            "Actualiza los datos de un usuario existente en el sistema.",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "token",
              in: "header",
              description: "Token de autenticación",
              required: true,
              type: "string",
            },
            {
              name: "id",
              in: "path",
              description: "ID del usuario a actualizar",
              required: true,
              type: "string",
            },
          ],
          requestBody: {
            description: "Datos del usuario a actualizar",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/usuarios",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Usuario actualizado exitosamente",
            },
            400: {
              description: "Solicitud incorrecta",
            },
            401: {
              description: "Token inválido",
            },
            404: {
              description: "Usuario no encontrado",
            },
            default: {
              description: "Error inesperado",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        ayudas: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "El identificador único del objeto",
              format: "objectId",
              example: "652402f5db3a59590d036429",
            },
            usuario: {
              type: "string",
              format: "objectId",
              description:
                "Tiene el Id que hace referencia a la colección usuarios",
              example: "6522c63bf766de5b88c7f36f",
            },
            indicador_de_ayuda: {
              type: "string",
              format: "objectId",
              description:
                "Tiene el Id que hace referencia a la colección indicadores",
              example: "6522c6adf766de5b88c7f37c",
            },
            titulo_ayuda: {
              type: "string",
              description: "Se da el titulo de la ayuda solicitada",
              example: "Actualización de programa de modelado 3D",
            },
            fecha_ayuda: {
              type: "string",
              description: "Es la fecha de la solicitud de la ayuda",
              example: "23/11/2023",
            },
            area_asignada: {
              type: "string",
              description: "Es el area de la empresa que solicita la ayuda",
              example: "Modelado",
            },
            prioridad: {
              type: "string",
              description: "Es la prioridad que tiene la solicitud de la tarea",
              example: "Alta",
            },
            motivo_ayuda: {
              type: "string",
              description: "Razon por la que se solicita ayuda",
              example: "No se pudo cumplir la fecha por errores en el software",
            },
            estado: {
              type: "string",
              description: "El estado de la solicitud de ayuda",
              example: "Pendiente",
            },
          },
        },
        indicadores: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "El identificador único del objeto",
              format: "objectId",
              example: "6522c6adf766de5b88c7f37c",
            },
            indicador: {
              type: "string",
              description: "El indicador relacionado",
              example: "Modelado 3D",
            },
            descripcion: {
              type: "string",
              description: "Una descripción del indicador",
              example: "Interés por el diseño y modelado 3D",
            },
            usuario: {
              type: "string",
              format: "objectId",
              description: "El identificador único del usuario relacionado",
              example: "6522c63bf766de5b88c7f36f",
            },
            categoria: {
              type: "string",
              description: "La categoría del indicador",
              example: "Baja",
            },
            fecha_de_inicio: {
              type: "string",
              description: "La fecha de inicio del indicador",
              example: "12/05/21",
            },
            fecha_de_terminacion: {
              type: "string",
              description: "La fecha de terminación del indicador",
              example: "12/12/21",
            },
            formula: {
              type: "string",
              description: "La fórmula utilizada para calcular el indicador",
              example: "Met. Ágil",
            },
            frecuencia: {
              type: "string",
              description: "La frecuencia de medición del indicador",
              example: "1/4",
            },
            cumplimiento: {
              type: "integer",
              description: "El nivel de cumplimiento del indicador",
              example: 31,
            },
            area: {
              type: "string",
              description:
                "El área o departamento relacionado con el indicador",
              example: "Marketing",
            },
          },
        },
        reportes: {
          type: "object",
          properties: {
            _id: {
                type: "string",
                description: "El identificador único del objeto",
                format: "objectId",
                example: "65244c1e0333085a36155b5a",
              },
            usuario: {
              type: "string",
              format: "objectId",
              description: "El identificador único del usuario que reportó el indicador",
              example: "6522c63bf766de5b88c7f36f",
            },
            indicador_reportado: {
              type: "string",
              format: "objectId",
              description: "El identificador único del indicador reportado",
              example: "6522c6adf766de5b88c7f37c",
            },
            titulo_reporte: {
              type: "string",
              description: "El título del reporte",
              example: "Demoras en el Modelado 3D",
            },
            fecha_reporte: {
              type: "string",
              format: "date",
              description:"La fecha en la que se realizó el reporte",
              example: "2023-10-09",
            },
            resultado_indicador: {
              type: "string",
              description: "El resultado del indicador reportado",
              example:
                "El modelado 3D de los proyectos está demorado y se espera completarlo dentro del plazo establecido.",
            },
            motivo_reporte: {
              type: "string",
              description: "El motivo del reporte",
              example: "Demora de avance del modelado 3D de proyectos.",
            },
            recomendacion: {
              type: "string",
              description: "Recomendaciones relacionadas con el reporte",
              example:
                "Acelerar el desarrollo del modelado 3D de manera urgente para cumplir con los plazos de entrega.",
            },
          },
        },
        usuarios: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "El identificador único del usuario",
              example: "6522c63bf766de5b88c7f36f"
            },
            nombre: {
              type: "string",
              description: "El nombre del usuario",
              example: "Zharick Rojas Ardila"
            },
            email: {
              type: "string",
              description: "La dirección de correo electrónico del usuario",
              example: "zharojas23@gmail.com"
            },
            imagen: {
              type: "string",
              description: "URL de la imagen de perfil del usuario",
              example: "https://pps.whatsapp.net/v/t61.24694-24/377904269_1026448665168415_5167264045592923332_n.jpg?ccb=11-4&oh=01_AdQEYb2juj0oBNSHFpOw9I-KZKFQcG8pnPS7k8vlQDgSJw&oe=652FD814&_nc_sid=000000&_nc_cat=109"
            },
            telefono: {
              type: "string",
              description: "El número de teléfono del usuario",
              example: "3107534094"
            },
            cargo: {
              type: "string",
              description: "El cargo o posición del usuario",
              example: "Gerencia"
            },
            password: {
              type: "string",
              description: "La contraseña del usuario encriptada",
              example: "$2a$10$/1btmrX/vlUBF1kVY0.HUesHvNarOYYc.SsiKVuaXpLdKnVPkLVtW"
            },
            rol: {
              type: "string",
              description: "El rol del usuario (por ejemplo, ADMIN o USER)",
              example: "ADMIN"
            },
            fecha_registro: {
              type: "string",
              description: "La fecha de registro del usuario",
              example: "23/02/05"
            },
            activo: {
              type: "boolean",
              description: "Indica si el usuario está activo o no",
              example: true
            }
          }
        },
      },
    },
  },
  apis: [
    "./routes/ayudas.routes.js",
    "./routes/indicadores.routes.js",
    "./routes/login.routes.js",
    "./routes/register.routes.js",
    "./routes/reportes.routes.js",
    "./routes/usuarios.routes.js",
  ],
};

export default data;
