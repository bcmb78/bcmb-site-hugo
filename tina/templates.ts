import type { TinaField } from "tinacms";
export function boutiqueFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "article",
      label: "article",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "image",
          name: "thumbnail",
          label: "thumbnail",
        },
      ],
    },
  ] as TinaField[];
}
export function bureauFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "membre",
      label: "membre",
      list: true,
      fields: [
        {
          type: "string",
          name: "nom",
          label: "nom",
        },
        {
          type: "string",
          name: "fonction",
          label: "fonction",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
      ],
    },
  ] as TinaField[];
}
export function docs_et_liensFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "lien",
      label: "lien",
      list: true,
      fields: [
        {
          type: "string",
          name: "nom",
          label: "nom",
        },
        {
          type: "string",
          name: "lienUrl",
          label: "lienUrl",
        },
      ],
    },
    {
      type: "object",
      name: "docs",
      label: "docs",
      list: true,
      fields: [
        {
          type: "string",
          name: "nom",
          label: "nom",
        },
        {
          type: "image",
          name: "fichier",
          label: "fichier",
        },
        {
          type: "string",
          name: "lien_externe",
          label: "lien_externe",
        },
      ],
    },
  ] as TinaField[];
}
export function equipeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "division",
      label: "division",
    },
    {
      type: "string",
      name: "iframe",
      label: "iframe",
    },
  ] as TinaField[];
}
export function evenementFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "name",
    },
    {
      type: "string",
      name: "event_type",
      label: "event_type",
      options: [
        "tournoi",
        "club",
        "exterieur",
        "autre",
        "creneau",
        "interclub_regional",
        "stage_jeunes",
        "journee_jeunes",
      ],
    },
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "datetime",
      name: "end_date",
      label: "end_date",
    },
    {
      type: "string",
      name: "lieu",
      label: "lieu",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "categorie",
      label: "categorie",
      options: [
        "trophée_jeune",
        "tournoi_jeune",
        "tournoi_adulte",
        "tournoi_interne",
      ],
    },
    {
      type: "datetime",
      name: "date_inscription",
      label: "date_inscription",
    },
    {
      type: "datetime",
      name: "date_tirage",
      label: "date_tirage",
    },
    {
      type: "image",
      name: "poster",
      label: "poster",
    },
    {
      type: "image",
      name: "fiche_inscription",
      label: "fiche_inscription",
    },
    {
      type: "image",
      name: "convocation",
      label: "convocation",
    },
    {
      type: "image",
      name: "reglement",
      label: "reglement",
    },
  ] as TinaField[];
}
export function inscriptionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "object",
      name: "tarif",
      label: "tarif",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "number",
          name: "price",
          label: "price",
        },
        {
          type: "object",
          name: "avantage",
          label: "avantage",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function lieuFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "lieu",
      label: "lieu",
      list: true,
      fields: [
        {
          type: "string",
          name: "nom",
          label: "nom",
        },
        {
          type: "string",
          name: "adresse",
          label: "adresse",
        },
        {
          type: "string",
          name: "telephone",
          label: "telephone",
        },
        {
          type: "string",
          name: "infos",
          label: "infos",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
      ],
    },
  ] as TinaField[];
}
export function newsletterFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "formule",
      label: "formule",
    },
    {
      type: "string",
      name: "signature",
      label: "signature",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "categorie",
      label: "categorie",
      options: ["Vie du club", "Interclubs", "Annonce", "Tournoi", "General"],
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function resultatFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "photos",
      label: "photos",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "res_type",
      label: "res_type",
      options: ["tournoi"],
    },
    {
      type: "string",
      name: "categorie",
      label: "categorie",
      options: ["jeune", "adulte"],
    },
  ] as TinaField[];
}
export function r_sum__interclubsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "object",
      name: "score",
      label: "score",
      list: true,
      fields: [
        {
          type: "string",
          name: "equipe1",
          label: "equipe1",
        },
        {
          type: "number",
          name: "score1",
          label: "score1",
        },
        {
          type: "string",
          name: "equipe2",
          label: "equipe2",
        },
        {
          type: "number",
          name: "score2",
          label: "score2",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "string",
      name: "type",
      label: "res_type",
      options: ["interclub"],
    },
  ] as TinaField[];
}
export function skybadFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "albums",
      label: "albums",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
        {
          type: "image",
          name: "thumbnail",
          label: "thumbnail",
        },
      ],
    },
    {
      type: "object",
      name: "palmares",
      label: "palmares",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
  ] as TinaField[];
}
