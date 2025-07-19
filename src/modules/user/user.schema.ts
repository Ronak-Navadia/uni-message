import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "./user.enum";

@Schema({timestamps: true})
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ default: null })
    countryCode: string;

    @Prop({ unique: true, default: null })
    phoneNo: string;

    @Prop({ default: null })
    avatar?: string;

    @Prop({ required: true })
    password: string;

    @Prop({ enum: UserRole, default: UserRole.USER })
    role: UserRole;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User)