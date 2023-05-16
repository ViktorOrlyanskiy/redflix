import { ComponentType } from 'react';

type TypeRootStackAdminList = {
    Admin: undefined;
};

export type TypeRootStackParamList = {
    Auth: undefined;
    Home: undefined;
    NotFound: undefined;
} & TypeRootStackAdminList;

export interface IRoute {
    name: keyof TypeRootStackParamList;
    component: ComponentType;
    isAdmin?: boolean;
}
