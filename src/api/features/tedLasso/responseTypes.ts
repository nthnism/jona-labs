interface TvShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
    officialSite?: string | null;
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
    officialSite?: string | null;
  } | null;
  dvdCountry: {
    name: string;
    code: string;
    timezone: string;
  } | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  updated: number;
  _links: {
    self: { href: string };
    previousepisode?: {
      href: string;
      name?: string;
    };
    nextepisode?: {
      href: string;
      name?: string;
    };
  };
}

interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number | null;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  _links: {
    self: { href: string };
    show: {
      href: string;
      name?: string;
    };
  };
}

export interface CastPerson {
  id: number;
  url: string;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  } | null;
  birthday: string | null;
  deathday: string | null;
  gender: string | null;
  image: {
    medium: string;
    original: string;
  } | null;
  updated: number;
  _links: {
    self: { href: string };
  };
}

export interface CastCharacter {
  id: number;
  url: string;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  _links: {
    self: { href: string };
  };
}

export interface CastEntry {
  person: CastPerson;
  character: CastCharacter;
  self: boolean;
  voice: boolean;
}

export type GetShowDetailsResponse = TvShow;
export type GetEpisodeDetailsResponse = Episode;
export type GetEpisodeListResponse = Episode[];
export type GetShowCastResponse = CastEntry[];
