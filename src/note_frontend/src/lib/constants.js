import { yellow, green } from "@material-ui/core/colors"

export const STATES = {
  CM: "Completed",
  ER: "Error",
  PR: "Progress",
  QD: "Queued",
  WT: "Wait",
}

export const FUNCTION_NAMES = {
  LR: "Raster",
  LV: "Vector",
  LC: "CSV",
  LO: "OSM",
}

export const STATE_COLORS = {
  ER: "error.main",
  CM: "primary.main",
  PR: yellow[100],
  QD: "text.primary",
  WT: green[100],
}

export const LOAD_VECTOR = "LV"
export const LOAD_RASTER = "LR"
export const LOAD_CSV = "LC"
export const LOAD_OSM = "LO"
export const TaskTypes = [
  {
    id: LOAD_VECTOR,
    name: "Load vector data",
    folder: "vector",
  },
  {
    id: LOAD_RASTER,
    name: "Load raster data",
    folder: "raster",
  },
  {
    id: LOAD_CSV,
    name: "Load csv data",
    folder: "csv",
  },
  {
    id: LOAD_OSM,
    name: "Load OSM",
    folder: "osm",
  },
]

export const GIS_SRID = [
  {
    name: "GDA94 / MGA zone 50",
    srid: 28350,
  },
  {
    name: "GDA94",
    srid: 4283,
  },
  {
    name: "WGS 84(GPS)",
    srid: 4326,
  },
]

export const CRITERIA_LIST = [
  ...Array(28)
    .fill(1)
    .map((_, i) => `CR ${i + 1}`),
  ...Array(7)
    .fill(1)
    .map((_, i) => `WS ${i + 1}`),
  ...Array(13)
    .fill(1)
    .map((_, i) => `BIO ${i + 1}`),
  ...Array(4)
    .fill(1)
    .map((_, i) => `ESH ${i + 1}`),
  ...Array(2)
    .fill(1)
    .map((_, i) => `EN ${i + 1}`),
  ...Array(2)
    .fill(1)
    .map((_, i) => `WM ${i + 1}`),
  ...Array(12)
    .fill(1)
    .map((_, i) => `LIV ${i + 1}`),
  ...Array(22)
    .fill(1)
    .map((_, i) => `H&W ${i + 1}`),
  ...Array(5)
    .fill(1)
    .map((_, i) => `T&E ${i + 1}`),
]

export const RESULTS_MARKS = {
  L: 1,
  M: 2,
  H: 3,
  Y: 3,
  N: 0,
}

const ASSET_TYPE_BUSHLAND = "GS_BL"
const ASSET_TYPE_PARK = "GS_PK"
const ASSET_TYPE_N_PARK = "GS_NPK"
const ASSET_TYPE_SMALL_URBAN_PARK = "GS_SPK"
const ASSET_TYPE_SPORTS_GROUND = "GS_SP"
const ASSET_TYPE_INSTITUTIONAL_GROUND = "GS_IG"
const ASSET_TYPE_CEMETERIES = "GS_CE"
const ASSET_TYPE_COMMUNAL_SPACE = "GS_CS"
const ASSET_TYPE_COMMUNITY_GARDENS = "GS_CG"
const ASSET_TYPE_DOMESTIC_GARDENS = "GS_DG"

// # 5 types for Urban Space
const ASSET_TYPE_CITY_SQUARE = "US_CS"
const ASSET_TYPE_PEDESTRIAN_MALLS = "US_PM"
const ASSET_TYPE_PEDESTRIAN_ACCESS_WAY = "US_PAW"
const ASSET_TYPE_PLAZAS = "US_PL"
const ASSET_TYPE_VACANT_LAND = "US_VL"

// # 7 types for Corridors
const ASSET_TYPE_RIVER_FORESHORE = "COR_RF"
const ASSET_TYPE_FREEWAY_RESERVE = "COR_FR"
const ASSET_TYPE_RAILWAY_RESERVE = "COR_RR"
const ASSET_TYPE_LANEWAYS = "COR_LW"
const ASSET_TYPE_LAND_BRIDGES = "COR_LB"
const ASSET_TYPE_ROAD_VERGES = "COR_RV"
const ASSET_TYPE_ROAD_MEDIANS = "COR_RM"

// # 3 types for Elements
const ASSET_TYPE_GREEN_ROOF = "ELE_GR"
const ASSET_TYPE_GREEN_WALL = "ELE_GW"
const ASSET_TYPE_GREEN_FACADES = "ELE_GF"

export const ASSET_TYPE_CHOICES = {
  [ASSET_TYPE_BUSHLAND]: "Bushland",
  [ASSET_TYPE_PARK]: "City Parks and Gardens",
  [ASSET_TYPE_N_PARK]: "Neighbourhood Park",
  [ASSET_TYPE_SMALL_URBAN_PARK]: "Small Urban Park",
  [ASSET_TYPE_SPORTS_GROUND]: "Sports Ground",
  [ASSET_TYPE_INSTITUTIONAL_GROUND]: "Institutional Grounds",
  [ASSET_TYPE_CEMETERIES]: "Cemeteries",
  [ASSET_TYPE_COMMUNAL_SPACE]: "Communal Space",
  [ASSET_TYPE_COMMUNITY_GARDENS]: "Community Gardens",
  [ASSET_TYPE_DOMESTIC_GARDENS]: "Domestic Gardens",

  [ASSET_TYPE_CITY_SQUARE]: "City Square",
  [ASSET_TYPE_PEDESTRIAN_MALLS]: "Pedestrian Malls",
  [ASSET_TYPE_PEDESTRIAN_ACCESS_WAY]: "Pedestrian Access Ways(PAW)",
  [ASSET_TYPE_PLAZAS]: "Plazas",
  [ASSET_TYPE_VACANT_LAND]: "Vacant Land",

  [ASSET_TYPE_RIVER_FORESHORE]: "River Foreshore",
  [ASSET_TYPE_FREEWAY_RESERVE]: "Freeway Reserve",
  [ASSET_TYPE_RAILWAY_RESERVE]: "Railway Reserve",
  [ASSET_TYPE_LANEWAYS]: "Laneways",
  [ASSET_TYPE_LAND_BRIDGES]: "Land Bridges",
  [ASSET_TYPE_ROAD_VERGES]: "Road Verges / Nature Strips",
  [ASSET_TYPE_ROAD_MEDIANS]: "Road Medians",

  [ASSET_TYPE_GREEN_ROOF]: "Green Roof",
  [ASSET_TYPE_GREEN_WALL]: "Green Walls",
  [ASSET_TYPE_GREEN_FACADES]: "Green Facades",
}
