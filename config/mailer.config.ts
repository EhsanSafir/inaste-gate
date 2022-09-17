import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailerOptions, MailerOptionsFactory } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import * as path from "path";

@Injectable()
export class MailerConfig implements  MailerOptionsFactory{
  constructor(private configService:ConfigService) {}


  createMailerOptions(): Promise<MailerOptions> | MailerOptions {
    return {
      transport: this.configService.get('mailer'),
      template:{
        dir:path.basename(path.dirname(__dirname))+'/templates/emails/',
        adapter : new HandlebarsAdapter()
      }
    };
  }
}