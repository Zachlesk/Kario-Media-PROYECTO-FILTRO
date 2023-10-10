const data = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Motocicletas Honda",
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
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Lista de ayudas",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/ayudas"
                                        }
                                    }
                                }
                            }
                        },
                        "401": {
                            description: "Token inválido",
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    },
                }
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
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la ayuda a obtener",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Detalles de la ayuda",
                            schema: {
                                $ref: "#/definitions/Ayuda"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/ayudas/post": {
                "post": {
                    summary: "Crear una nueva ayuda",
                    description: "Crea una nueva ayuda.",
                    tags: ["Ayudas"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos de la ayuda a crear",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/Ayuda"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Ayuda creada exitosamente",
                            schema: {
                                "$ref": "#/definitions/Ayuda"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/ayudas/delete/{id}": {
                "delete": {
                    summary: "Eliminar una ayuda por ID",
                    description: "Elimina una ayuda específica por su ID.",
                    tags: ["Ayudas"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la ayuda a eliminar",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Ayuda eliminada exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/ayudas/put/{id}": {
                "put": {
                    summary: "Actualizar una ayuda por ID",
                    description: "Actualiza una ayuda específica por su ID.",
                    tags: ["Ayudas"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la ayuda a actualizar",
                            required: true,
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos de la ayuda actualizada",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/Ayuda"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Ayuda actualizada exitosamente",
                            schema: {
                                "$ref": "#/definitions/Ayuda"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/indicadores/all": {
                "get": {
                    summary: "Obtener todos los indicadores",
                    description: "Obtiene todos los indicadores disponibles.",
                    tags: ["Indicadores"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Lista de indicadores",
                            schema: {
                                type: "array",
                                items: {
                                    "$ref": "#/definitions/Indicador"
                                }
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/indicadores/one/{id}": {
                "get": {
                    summary: "Obtener un indicador por ID",
                    description: "Obtiene un indicador específico por su ID.",
                    tags: ["Indicadores"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del indicador a obtener",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Detalles del indicador",
                            schema: {
                                "$ref": "#/definitions/Indicador"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/indicadores/post": {
                "post": {
                    summary: "Crear un nuevo indicador",
                    description: "Crea un nuevo indicador.",
                    tags: ["Indicadores"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos del indicador a crear",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/Indicador"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Indicador creado exitosamente",
                            schema: {
                                "$ref": "#/definitions/Indicador"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/indicadores/delete/{id}": {
                "delete": {
                    summary: "Eliminar un indicador por ID",
                    description: "Elimina un indicador específico por su ID.",
                    tags: ["Indicadores"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del indicador a eliminar",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Indicador eliminado exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/indicadores/put/{id}": {
                "put": {
                    summary: "Actualizar un indicador por ID",
                    description: "Actualiza un indicador específico por su ID.",
                    tags: ["Indicadores"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del indicador a actualizar",
                            required: true,
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos del indicador actualizado",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/IndicadorInput"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Indicador actualizado exitosamente",
                            schema: {
                                "$ref": "#/definitions/Indicador"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/login/validate": {
                "post": {
                    summary: "Iniciar sesión de usuario",
                    description: "Inicia sesión de un usuario con su correo electrónico y contraseña.",
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
                                            description: "Correo electrónico del usuario"
                                        },
                                        password: {
                                            type: "string",
                                            description: "Contraseña del usuario"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Inicio de sesión exitoso",
                            schema: {
                                type: "object",
                                properties: {
                                    existeEmail: {
                                        "$ref": "#/definitions/Usuario"
                                    },
                                    token: {
                                        type: "string",
                                        description: "Token de autenticación"
                                    },
                                    success: {
                                        type: "boolean",
                                        description: "Indica si el inicio de sesión fue exitoso"
                                    },
                                    message: {
                                        type: "string",
                                        description: "Mensaje de éxito"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Error en el inicio de sesión",
                            schema: {
                                type: "object",
                                properties: {
                                    msg: {
                                        type: "string",
                                        description: "Mensaje de error"
                                    }
                                }
                            }
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/register/Register": {
                "post": {
                    summary: "Registro de nuevo usuario",
                    description: "Registra un nuevo usuario en la aplicación.",
                    tags: ["Register"],
                    requestBody: {
                        description: "Datos de registro de usuario",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/UsuarioInput"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Usuario registrado exitosamente"
                        },
                        400: {
                            description: "Error en el registro de usuario",
                            schema: {
                                type: "object",
                                properties: {
                                    msg: {
                                        type: "string",
                                        description: "Mensaje de error"
                                    }
                                }
                            }
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/reportes/all": {
                "get": {
                    summary: "Obtener lista de reportes",
                    description: "Obtiene una lista de reportes en la aplicación.",
                    tags: ["Reportes"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Lista de reportes obtenida exitosamente",
                            schema: {
                                type: "array",
                                items: {
                                    "$ref": "#/definitions/Reporte"
                                }
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/reportes/one/{id}": {
                "get": {
                    summary: "Obtener un reporte por ID",
                    description: "Obtiene los detalles de un reporte específico por su ID.",
                    tags: ["Reportes"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del reporte a consultar",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Detalles del reporte obtenidos exitosamente",
                            schema: {
                                "$ref": "#/definitions/Reporte"
                            }
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/reportes/post": {
                "post": {
                    summary: "Crear un nuevo reporte",
                    description: "Crea un nuevo reporte en la aplicación.",
                    tags: ["Reportes"],
                    requestBody: {
                        description: "Datos del reporte a crear",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/ReporteInput"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Reporte creado exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/reportes/delete/{id}": {
                "delete": {
                    summary: "Eliminar un reporte por ID",
                    description: "Elimina un reporte específico por su ID.",
                    tags: ["Reportes"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del reporte a eliminar",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Reporte eliminado exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/reportes/put/{id}": {
                "put": {
                    summary: "Actualizar un reporte por ID",
                    description: "Actualiza un reporte específico por su ID.",
                    tags: ["Reportes"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del reporte a actualizar",
                            required: true,
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos del reporte a actualizar",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/ReporteInput"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Reporte actualizado exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/usuarios/all": {
                "get": {
                    summary: "Obtener lista de usuarios",
                    description: "Obtiene una lista de todos los usuarios registrados en el sistema.",
                    tags: ["Usuarios"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Lista de usuarios obtenida exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/usuarios/one/{id}": {
                "get": {
                    summary: "Obtener información de un usuario",
                    description: "Obtiene información detallada de un usuario según su ID.",
                    tags: ["Usuarios"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del usuario a consultar",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Información del usuario obtenida exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        404: {
                            description: "Usuario no encontrado"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
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
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos del usuario a crear",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/definitions/UsuarioInput"
                                }
                            }
                        }
                    },
                    responses: {
                        201: {
                            description: "Usuario creado exitosamente",
                            schema: {
                                $ref: "#/definitions/Usuario"
                            }
                        },
                        400: {
                            description: "Error en la solicitud"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
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
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del usuario a eliminar",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Usuario eliminado exitosamente"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        404: {
                            description: "Usuario no encontrado"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            },
            "/usuarios/put/{id}": {
                put: {
                    summary: "Actualizar un usuario",
                    description: "Actualiza los datos de un usuario existente en el sistema.",
                    tags: ["Usuarios"],
                    parameters: [
                        {
                            name: "token",
                            in: "header",
                            description: "Token de autenticación",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "ID del usuario a actualizar",
                            required: true,
                            type: "string"
                        }
                    ],
                    requestBody: {
                        description: "Datos del usuario a actualizar",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    "$ref": "#/definitions/UsuarioInput"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Usuario actualizado exitosamente"
                        },
                        400: {
                            description: "Solicitud incorrecta"
                        },
                        401: {
                            description: "Token inválido"
                        },
                        404: {
                            description: "Usuario no encontrado"
                        },
                        default: {
                            description: "Error inesperado"
                        }
                    }
                }
            }
        },
        components: {
            schemas: {
                MotoHonda: {
                    type: "object",
                    properties: {
                        modelo: {
                            type: "string",
                            description: "El modelo que tiene la motocicleta",
                            example: "CBR 650"
                        },
                        tipo: {
                            type: "string",
                            format: "objectId",
                            description: "El identificador traido de la colección tiposdemotos",
                            example: "651c140cdbe082819d02dd06"
                        },
                        cuerpodeaceleracion: {
                            type: "string",
                            description: "Si la moto es Fuel Injection o Carburada",
                            example: "FI o Carburada"
                        },
                        abs: {
                            type: "string",
                            description: "Si la motocicleta tiene ABS",
                            example: "Si o No"
                        },
                        cilindraje: {
                            type: "string",
                            description: "El cilindraje de la motocicleta",
                            example: "649cc"
                        },
                        descripcion: {
                            type: "string",
                            description: "La descripción de la motocicleta",
                            example: "La Honda CBR 650 es una motocicleta deportiva de la reconocida marca..."
                        },
                        marca: {
                            type: "string",
                            description: "La marca de la motocicleta sera el mismo dependiendo la colección",
                            example: "Honda"
                        },
                        imagen: {
                            type: "string",
                            description: "URL directo de la imagen de la motocicleta",
                            example: "https://a5i4f6g5.stackpathcdn.com/images/cms/Nueva-CBR650R-negro.png"
                        }
                    }
                },
                MotoKawasaki: {
                    type: "object",
                    properties: {
                        modelo: {
                            type: "string",
                            description: "El modelo que tiene la motocicleta",
                            example: "Ninja ZX-6R"
                        },
                        tipo: {
                            type: "string",
                            format: "objectId",
                            description: "El identificador traido de la colección tiposdemotos",
                            example: "651c140cdbe082819d02dd06"
                        },
                        cuerpodeaceleracion: {
                            type: "string",
                            description: "Si la moto es Fuel Injection o Carburada",
                            example: "FI"
                        },
                        abs: {
                            type: "string",
                            description: "Si la motocicleta tiene ABS",
                            example: "Si"
                        },
                        cilindraje: {
                            type: "string",
                            description: "El cilindraje de la motocicleta",
                            example: "636cc"
                        },
                        descripcion: {
                            type: "string",
                            description: "La descripción de la motocicleta",
                            example: "La Kawasaki Ninja ZX-6R es una motocicleta deportiva de alta gama..."
                        },
                        marca: {
                            type: "string",
                            description: "La marca de la motocicleta será la misma para Kawasaki",
                            example: "Kawasaki"
                        },
                        imagen: {
                            type: "string",
                            description: "URL directo de la imagen de la motocicleta",
                            example: "https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/32/58442660-f358-4052-b448-922b994e5772.jpg?w=750"
                        }
                    }
                },
                MotoYamaha: {
                    type: "object",
                    properties: {
                        modelo: {
                            type: "string",
                            description: "El modelo que tiene la motocicleta",
                            example: "YZF-R6"
                        },
                        tipo: {
                            type: "string",
                            format: "objectId",
                            description: "El identificador traido de la colección tiposdemotos",
                            example: "651c140cdbe082819d02dd06"
                        },
                        cuerpodeaceleracion: {
                            type: "string",
                            description: "Si la moto es Fuel Injection o Carburada",
                            example: "FI o Carburada"
                        },
                        abs: {
                            type: "string",
                            description: "Si la motocicleta tiene ABS",
                            example: "Si o No"
                        },
                        cilindraje: {
                            type: "string",
                            description: "El cilindraje de la motocicleta",
                            example: "599cc"
                        },
                        descripcion: {
                            type: "string",
                            description: "La descripción de la motocicleta",
                            example: "La Yamaha YZF-R6 es una motocicleta deportiva de alto rendimiento..."
                        },
                        marca: {
                            type: "string",
                            description: "La marca de la motocicleta será la misma dependiendo la colección",
                            example: "Yamaha"
                        },
                        imagen: {
                            type: "string",
                            description: "URL directo de la imagen de la motocicleta",
                            example: "https://static.wixstatic.com/media/3104c9_e78e7783b59744eb89b2783b97829941~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_80,enc_auto/3104c9_e78e7783b59744eb89b2783b97829941~mv2.jpg"
                        }
                    }
                },
                MotoSuzuki: {
                    type: "object",
                    properties: {
                        modelo: {
                            type: "string",
                            description: "El modelo que tiene la motocicleta",
                            example: "GSX-S750"
                        },
                        tipo: {
                            type: "string",
                            format: "objectId",
                            description: "El identificador traido de la colección tiposdemotos",
                            example: "651c140cdbe082819d02dd06"
                        },
                        cuerpodeaceleracion: {
                            type: "string",
                            description: "Si la moto es Fuel Injection o Carburada",
                            example: "FI"
                        },
                        abs: {
                            type: "string",
                            description: "Si la motocicleta tiene ABS",
                            example: "Si"
                        },
                        cilindraje: {
                            type: "string",
                            description: "El cilindraje de la motocicleta",
                            example: "749cc"
                        },
                        descripcion: {
                            type: "string",
                            description: "La descripción de la motocicleta",
                            example: "La Suzuki GSX-R750 es una motocicleta deportiva de alto rendimiento..."
                        },
                        marca: {
                            type: "string",
                            description: "La marca de la motocicleta será la misma dependiendo la colección",
                            example: "Suzuki"
                        },
                        imagen: {
                            type: "string",
                            description: "URL directo de la imagen de la motocicleta",
                            example: "https://suzuki.com.co/sites/default/files/2023-02/GSX%20S750A%20Negra_0.png"
                        }
                    }
                }
            }
        }
    },
    apis: [
        "./routes/ayudas.routes.js",
        "./routes/indicadores.routes.js",
        "./routes/login.routes.js",
        "./routes/register.routes.js",
        "./routes/reportes.routes.js",
        "./routes/usuarios.routes.js"
    ],
}

export default data