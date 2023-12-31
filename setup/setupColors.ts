import airbnb from '@superset-ui/core/lib/color/colorSchemes/categorical/airbnb';
import categoricalD3 from '@superset-ui/core/lib/color/colorSchemes/categorical/d3';
import echarts from '@superset-ui/core/lib/color/colorSchemes/categorical/echarts';
import google from '@superset-ui/core/lib/color/colorSchemes/categorical/google';
import lyft from '@superset-ui/core/lib/color/colorSchemes/categorical/lyft';
import preset from '@superset-ui/core/lib/color/colorSchemes/categorical/preset';
import sequentialCommon from '@superset-ui/core/lib/color/colorSchemes/sequential/common';
import sequentialD3 from '@superset-ui/core/lib/color/colorSchemes/sequential/d3';
import {
  CategoricalScheme,
  getCategoricalSchemeRegistry,
  getSequentialSchemeRegistry,
  SequentialScheme,
} from '@superset-ui/core';
import superset from '@superset-ui/core/lib/color/colorSchemes/categorical/superset';

export default function setupColors(
  extraCategoricalColorSchemas: CategoricalScheme[] = [],
  extraSequentialColorSchemes: SequentialScheme[] = [],
) {
  // Register color schemes
  const categoricalSchemeRegistry = getCategoricalSchemeRegistry();

  if (extraCategoricalColorSchemas?.length > 0) {
    extraCategoricalColorSchemas.forEach(scheme => {
      categoricalSchemeRegistry.registerValue(scheme.id, scheme);
    });
  }








  
  [superset, airbnb, categoricalD3, echarts, google, lyft, preset].forEach(
    group => {
      group.forEach(scheme => {
        categoricalSchemeRegistry.registerValue(scheme.id, scheme);
      });
    },
  );
  categoricalSchemeRegistry.setDefaultKey('supersetColors');

  const sequentialSchemeRegistry = getSequentialSchemeRegistry();

  if (extraSequentialColorSchemes?.length > 0) {
    extraSequentialColorSchemes.forEach(scheme => {
      categoricalSchemeRegistry.registerValue(scheme.id, scheme);
    });
  }

  [sequentialCommon, sequentialD3].forEach(group => {
    group.forEach(scheme => {
      sequentialSchemeRegistry.registerValue(scheme.id, scheme);
    });
  });
  sequentialSchemeRegistry.setDefaultKey('superset_seq_1');
}
