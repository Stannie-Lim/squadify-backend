"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const typeorm_1 = require("typeorm");
const Message_1 = require("./Message");
const _1 = require(".");
let User = /** @class */ (() => {
    let User = class User {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.Index({ unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 30 }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 30 }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], User.prototype, "dob", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "avatarUrl", void 0);
    __decorate([
        typeorm_1.OneToMany(type => Message_1.Message, message => message.user),
        __metadata("design:type", Array)
    ], User.prototype, "sentMessages", void 0);
    __decorate([
        typeorm_1.ManyToOne(type => _1.Geolocation, geolocation => geolocation.users),
        __metadata("design:type", _1.Geolocation)
    ], User.prototype, "geolocation", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
})();
exports.User = User;
//# sourceMappingURL=User.js.map