define({ "api": [
  {
    "type": "delete",
    "url": "/:id",
    "title": "Deleta uma ocorrencia por ID",
    "name": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da ocorrencia.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"mensagem\": \"Ocorrencia removida com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "ocorrencias/fabricantes/:fabricante",
    "title": "Lista todas as ocorrencias por fabricante",
    "name": "getFabricante",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "ocorrencias/:id",
    "title": "Lista unica ocorrencia por ID",
    "name": "getOcorrencia",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "/ocorrencias",
    "title": "Lista todas as ocorrencias",
    "name": "getOcorrencias",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "/ocorrencias",
    "title": "Lista todas as ocorrencias gerando arquivo PDF",
    "name": "getOcorrencias",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n\"mensagem\": \"PDF gerado com sucesso\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "ocorrencias/vitimasfatais",
    "title": "Lista todas as ocorrencias que tiveram vitimas fatais",
    "name": "getVitimas",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "post",
    "url": "/ocorrencias",
    "title": "",
    "name": "ocorrencias",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "fabricante",
            "description": "<p>Fabricante da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>Modelo da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "prefixo",
            "description": "<p>Prefixo da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "ramo",
            "description": "<p>Ramo da Aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "companhiaAerea",
            "description": "<p>Companhia aerea da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "voo",
            "description": "<p>Voo da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "origem",
            "description": "<p>Origem da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "destino",
            "description": "<p>Destino da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "classificacao",
            "description": "<p>Classificacao do acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data do acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo de acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>Cidade onde ocorrou o acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado onde ocorrou o acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "pais",
            "description": "<p>Pais onde ocorreu o acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "vitimas",
            "description": "<p>Vitimas envolvidas no acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "vitimasFatais",
            "description": "<p>Vitimas fatais.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Ocorrencias",
            "description": "<p>Mensgem de sucesso ao incluir uma ocorrencia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 201 Created\n{\n    \"mensagem\": \"Ocorrência incluída com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "Altera uma ocorrencia por ID",
    "name": "put",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "fabricante",
            "description": "<p>Fabricante da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>Modelo da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "prefixo",
            "description": "<p>Prefixo da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "ramo",
            "description": "<p>Ramo da Aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "companhiaAerea",
            "description": "<p>Companhia aerea da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "voo",
            "description": "<p>Voo da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "origem",
            "description": "<p>Origem da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "destino",
            "description": "<p>Destino da aeronave.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "classificacao",
            "description": "<p>Classificacao do acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data do acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo de acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>Cidade onde ocorrou o acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado onde ocorrou o acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "pais",
            "description": "<p>Pais onde ocorreu o acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "vitimas",
            "description": "<p>Vitimas envolvidas no acidente.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "vitimasFatais",
            "description": "<p>Vitimas fatais.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Ocorrencias",
            "description": "<p>Mensgem de sucesso ao incluir uma ocorrencia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"mensagem\": \"Atualizado com sucesso\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  }
] });
