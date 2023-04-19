import { defineConfig } from "tinacms";
import { boutiqueFields } from "./templates";
import { bureauFields } from "./templates";
import { docs_et_liensFields } from "./templates";
import { equipeFields } from "./templates";
import { evenementFields } from "./templates";
import { inscriptionFields } from "./templates";
import { lieuFields } from "./templates";
import { newsletterFields } from "./templates";
import { postFields } from "./templates";
import { resultatFields } from "./templates";
import { r_sum__interclubsFields } from "./templates";
import { skybadFields } from "./templates";



export default defineConfig({
  branch: "master",
  clientId: "276dd2ef-f115-4a6e-811b-b9532ee5fc25", // Get this from tina.io
  token: "3359371d72c2f388988e94a63301c8df5f6cd887", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Post",
        name: "post",
        path: "content/post",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [

          ...postFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Resultat",
        name: "resultat",
        path: "content/resultat",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...resultatFields(),
            ],
            label: "resultat",
            name: "resultat",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...r_sum__interclubsFields(),
            ],
            label: "resume-interclubs",
            name: "resume_interclubs",
          },
        ],
      },
      {
        format: "md",
        label: "Event",
        name: "event",
        path: "content/event",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...evenementFields(),
        ],
      },
      {
        format: "md",
        label: "Newsletter",
        name: "newsletter",
        path: "content/newsletter",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...newsletterFields(),
        ],
      },
      {
        format: "md",
        label: "Club",
        name: "club",
        path: "content/club",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...bureauFields(),
            ],
            label: "bureau",
            name: "bureau",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...lieuFields(),
            ],
            label: "lieu",
            name: "lieu",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...postFields(),
            ],
            label: "post",
            name: "post",
          },
        ],
      },
      {
        format: "md",
        label: "Docs_Liens",
        name: "docs_liens",
        path: "content/documents_liens",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...docs_et_liensFields(),
        ],
      },
      {
        format: "md",
        label: "Inscription",
        name: "inscription",
        path: "content/inscription",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...inscriptionFields(),
        ],
      },
      {
        format: "md",
        label: "Skybad",
        name: "skybad",
        path: "content/skybad",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...skybadFields(),
        ],
      },
      {
        format: "md",
        label: "Equipe",
        name: "equipe",
        path: "content/equipe",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...equipeFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "Boutique",
        name: "boutique",
        path: "content/boutique",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...boutiqueFields(),
        ],
      },
    ],
  },
});
