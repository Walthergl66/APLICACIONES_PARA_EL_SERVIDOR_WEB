"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadanosModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const ciudadanos_controller_1 = require("./ciudadanos.controller");
const ciudadanos_service_1 = require("./ciudadanos.service");
let CiudadanosModule = class CiudadanosModule {
};
exports.CiudadanosModule = CiudadanosModule;
exports.CiudadanosModule = CiudadanosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'NATS_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: [process.env.NATS_SERVERS || 'nats://localhost:4222'],
                    },
                },
            ]),
        ],
        controllers: [ciudadanos_controller_1.CiudadanosController],
        providers: [ciudadanos_service_1.CiudadanosService],
    })
], CiudadanosModule);
//# sourceMappingURL=ciudadanos.module.js.map