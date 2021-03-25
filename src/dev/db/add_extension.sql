CREATE EXTENSION IF NOT EXISTS postgis_raster;
SET postgis.gdal_enabled_drivers = 'ENABLE_ALL';
SET postgis.enable_outdb_rasters = True;
CREATE SCHEMA IF NOT EXISTS loadtmp AUTHORIZATION admin;