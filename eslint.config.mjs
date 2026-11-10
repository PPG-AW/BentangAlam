import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
import ts from 'eslint-config-next/typescript';
export default defineConfig([...next,...ts,globalIgnores(['.next/**']),{rules:{'react-hooks/set-state-in-effect':'off','react-hooks/purity':'off','react-hooks/immutability':'off','@next/next/no-img-element':'off'}}]);
