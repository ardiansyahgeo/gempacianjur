var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WILAYAHTERDAMPAK_2 = new ol.format.GeoJSON();
var features_WILAYAHTERDAMPAK_2 = format_WILAYAHTERDAMPAK_2.readFeatures(json_WILAYAHTERDAMPAK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHTERDAMPAK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHTERDAMPAK_2.addFeatures(features_WILAYAHTERDAMPAK_2);
var lyr_WILAYAHTERDAMPAK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WILAYAHTERDAMPAK_2, 
                style: style_WILAYAHTERDAMPAK_2,
                interactive: true,
    title: 'WILAYAH TERDAMPAK<br />\
    <img src="styles/legend/WILAYAHTERDAMPAK_2_0.png" /> Terdampak Parah<br />\
    <img src="styles/legend/WILAYAHTERDAMPAK_2_1.png" /> Terdampak Ringan<br />'
        });
var format_INTENSITASGEMPAMMI_3 = new ol.format.GeoJSON();
var features_INTENSITASGEMPAMMI_3 = format_INTENSITASGEMPAMMI_3.readFeatures(json_INTENSITASGEMPAMMI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTENSITASGEMPAMMI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTENSITASGEMPAMMI_3.addFeatures(features_INTENSITASGEMPAMMI_3);
var lyr_INTENSITASGEMPAMMI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INTENSITASGEMPAMMI_3, 
                style: style_INTENSITASGEMPAMMI_3,
                interactive: true,
    title: 'INTENSITAS GEMPA (MMI)<br />\
    <img src="styles/legend/INTENSITASGEMPAMMI_3_0.png" /> 5-6 mmi<br />\
    <img src="styles/legend/INTENSITASGEMPAMMI_3_1.png" /> 6-7 mmi<br />\
    <img src="styles/legend/INTENSITASGEMPAMMI_3_2.png" /> 7-7,5 mmi<br />\
    <img src="styles/legend/INTENSITASGEMPAMMI_3_3.png" /> >7,5 mmi<br />'
        });
var lyr_KEPADATANBANGUNAN_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "KEPADATAN BANGUNAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KEPADATANBANGUNAN_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11886240.000000, -837869.506283, 11965170.000000, -736571.779530]
                            })
                        });
var format_WILAYAHTEDAMPAK3_5 = new ol.format.GeoJSON();
var features_WILAYAHTEDAMPAK3_5 = format_WILAYAHTEDAMPAK3_5.readFeatures(json_WILAYAHTEDAMPAK3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHTEDAMPAK3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHTEDAMPAK3_5.addFeatures(features_WILAYAHTEDAMPAK3_5);
var lyr_WILAYAHTEDAMPAK3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WILAYAHTEDAMPAK3_5, 
                style: style_WILAYAHTEDAMPAK3_5,
                interactive: true,
    title: 'WILAYAH TEDAMPAK3<br />\
    <img src="styles/legend/WILAYAHTEDAMPAK3_5_0.png" /> PARAH<br />\
    <img src="styles/legend/WILAYAHTEDAMPAK3_5_1.png" /> RINGAN<br />'
        });
var format_BATASDESA_6 = new ol.format.GeoJSON();
var features_BATASDESA_6 = format_BATASDESA_6.readFeatures(json_BATASDESA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESA_6.addFeatures(features_BATASDESA_6);
var lyr_BATASDESA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASDESA_6, 
                style: style_BATASDESA_6,
                interactive: true,
                title: '<img src="styles/legend/BATASDESA_6.png" /> BATAS DESA'
            });
var format_POSKO_7 = new ol.format.GeoJSON();
var features_POSKO_7 = format_POSKO_7.readFeatures(json_POSKO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSKO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSKO_7.addFeatures(features_POSKO_7);
var lyr_POSKO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POSKO_7, 
                style: style_POSKO_7,
                interactive: true,
                title: '<img src="styles/legend/POSKO_7.png" /> POSKO'
            });
var format_SekolahTerdampak_8 = new ol.format.GeoJSON();
var features_SekolahTerdampak_8 = format_SekolahTerdampak_8.readFeatures(json_SekolahTerdampak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahTerdampak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahTerdampak_8.addFeatures(features_SekolahTerdampak_8);
var lyr_SekolahTerdampak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SekolahTerdampak_8, 
                style: style_SekolahTerdampak_8,
                interactive: true,
                title: '<img src="styles/legend/SekolahTerdampak_8.png" /> Sekolah Terdampak'
            });
var format_StrukturGeologi_9 = new ol.format.GeoJSON();
var features_StrukturGeologi_9 = format_StrukturGeologi_9.readFeatures(json_StrukturGeologi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturGeologi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrukturGeologi_9.addFeatures(features_StrukturGeologi_9);
var lyr_StrukturGeologi_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrukturGeologi_9, 
                style: style_StrukturGeologi_9,
                interactive: true,
                title: '<img src="styles/legend/StrukturGeologi_9.png" /> Struktur Geologi'
            });
var format_HasilSurvey_10 = new ol.format.GeoJSON();
var features_HasilSurvey_10 = format_HasilSurvey_10.readFeatures(json_HasilSurvey_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilSurvey_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilSurvey_10.addFeatures(features_HasilSurvey_10);
var lyr_HasilSurvey_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HasilSurvey_10, 
                style: style_HasilSurvey_10,
                interactive: true,
    title: 'Hasil Survey<br />\
    <img src="styles/legend/HasilSurvey_10_0.png" /> BPBD Cianjur<br />\
    <img src="styles/legend/HasilSurvey_10_1.png" /> Longsor<br />\
    <img src="styles/legend/HasilSurvey_10_2.png" /> Posko<br />\
    <img src="styles/legend/HasilSurvey_10_3.png" /> Bangunan Rusak Berat<br />\
    <img src="styles/legend/HasilSurvey_10_4.png" /> Bangunan Rusak Sedang<br />\
    <img src="styles/legend/HasilSurvey_10_5.png" /> Bangunan Rusak Ringan<br />'
        });
var format_Epicenter_11 = new ol.format.GeoJSON();
var features_Epicenter_11 = format_Epicenter_11.readFeatures(json_Epicenter_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Epicenter_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epicenter_11.addFeatures(features_Epicenter_11);
var lyr_Epicenter_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Epicenter_11, 
                style: style_Epicenter_11,
                interactive: true,
                title: '<img src="styles/legend/Epicenter_11.png" /> Epicenter'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_WILAYAHTERDAMPAK_2.setVisible(true);lyr_INTENSITASGEMPAMMI_3.setVisible(true);lyr_KEPADATANBANGUNAN_4.setVisible(false);lyr_WILAYAHTEDAMPAK3_5.setVisible(true);lyr_BATASDESA_6.setVisible(true);lyr_POSKO_7.setVisible(true);lyr_SekolahTerdampak_8.setVisible(true);lyr_StrukturGeologi_9.setVisible(false);lyr_HasilSurvey_10.setVisible(true);lyr_Epicenter_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_WILAYAHTERDAMPAK_2,lyr_INTENSITASGEMPAMMI_3,lyr_KEPADATANBANGUNAN_4,lyr_WILAYAHTEDAMPAK3_5,lyr_BATASDESA_6,lyr_POSKO_7,lyr_SekolahTerdampak_8,lyr_StrukturGeologi_9,lyr_HasilSurvey_10,lyr_Epicenter_11];
lyr_WILAYAHTERDAMPAK_2.set('fieldAliases', {'NAMOBJ': 'Nama Obyek', 'WADMKC': 'Kecamatan', 'WADMKD': 'Desa/Kelurahan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'jumlah_pen': 'Jumlah Penduduk', 'kepadatan_': 'Kepadatan penduduk', 'balita': 'balita', 'lansia': 'lansia', 'Status': 'Status', });
lyr_INTENSITASGEMPAMMI_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'mmi': 'mmi', });
lyr_WILAYAHTEDAMPAK3_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'KECAMATAN', 'WADMKD': 'DESA', 'WADMKK': 'KABUPATEN KOTA', 'WADMPR': 'PROVINSI', 'jumlah_pen': 'JUMLAH PENDUDUK', 'kepadatan_': 'KEPADATAN PENDUDUK', 'u0': 'PENDUDUK UMUR 0-5 TAHUN', 'u5': 'PENDUDUK UMUR 5-10 TAHUN', 'u10': 'PENDUDUK UMUR 10-15 TAHUN', 'u15': 'PENDUDUK UMUR 15-20 TAHUN', 'u20': 'PENDUDUK UMUR 20-25 TAHUN', 'u25': 'PENDUDUK UMUR 25-30 TAHUN', 'u30': 'PENDUDUK UMUR 30-35 TAHUN', 'u35': 'PENDUDUK UMUR 35-40 TAHUN', 'u40': 'PENDUDUK UMUR 40-45 TAHUN', 'u45': 'PENDUDUK UMUR 45-50 TAHUN', 'u50': 'PENDUDUK UMUR 50-55 TAHUN', 'u55': 'PENDUDUK UMUR 55-60 TAHUN', 'u60': 'PENDUDUK UMUR 60-65 TAHUN', 'u65': 'PENDUDUK UMUR 65-70 TAHUN', 'u70': 'PENDUDUK UMUR 70-75 TAHUN', 'u75': 'PENDUDUK UMUR >75 TAHUN', 'TERDAMPAK': 'TERDAMPAK', 'balita': 'balita', 'lansia': 'lansia', });
lyr_BATASDESA_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'jumlah_pen': 'jumlah_pen', 'kepadatan_': 'kepadatan_', 'u0': 'u0', 'u5': 'u5', 'u10': 'u10', 'u15': 'u15', 'u20': 'u20', 'u25': 'u25', 'u30': 'u30', 'u35': 'u35', 'u40': 'u40', 'u45': 'u45', 'u50': 'u50', 'u55': 'u55', 'u60': 'u60', 'u65': 'u65', 'u70': 'u70', 'u75': 'u75', });
lyr_POSKO_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', });
lyr_SekolahTerdampak_8.set('fieldAliases', {'NAME': 'NAME', 'IMAGE_LIN1': 'IMAGE_LIN1', 'IMAGE_LIN2': 'IMAGE_LIN2', 'IMAGE_LIN3': 'IMAGE_LIN3', });
lyr_StrukturGeologi_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STR_JAWA_': 'STR_JAWA_', 'STR_JAWA_I': 'STR_JAWA_I', });
lyr_HasilSurvey_10.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'IMAGE_LINK': 'IMAGE_LINK', 'status': 'status', });
lyr_Epicenter_11.set('fieldAliases', {'id': 'id', });
lyr_WILAYAHTERDAMPAK_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'jumlah_pen': 'TextEdit', 'kepadatan_': 'TextEdit', 'balita': 'TextEdit', 'lansia': 'TextEdit', 'Status': 'TextEdit', });
lyr_INTENSITASGEMPAMMI_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'mmi': 'TextEdit', });
lyr_WILAYAHTEDAMPAK3_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'jumlah_pen': 'TextEdit', 'kepadatan_': 'TextEdit', 'u0': 'TextEdit', 'u5': 'TextEdit', 'u10': 'TextEdit', 'u15': 'TextEdit', 'u20': 'TextEdit', 'u25': 'TextEdit', 'u30': 'TextEdit', 'u35': 'TextEdit', 'u40': 'TextEdit', 'u45': 'TextEdit', 'u50': 'TextEdit', 'u55': 'TextEdit', 'u60': 'TextEdit', 'u65': 'TextEdit', 'u70': 'TextEdit', 'u75': 'TextEdit', 'TERDAMPAK': 'TextEdit', 'balita': 'Range', 'lansia': 'Range', });
lyr_BATASDESA_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'jumlah_pen': 'TextEdit', 'kepadatan_': 'TextEdit', 'u0': 'TextEdit', 'u5': 'TextEdit', 'u10': 'TextEdit', 'u15': 'TextEdit', 'u20': 'TextEdit', 'u25': 'TextEdit', 'u30': 'TextEdit', 'u35': 'TextEdit', 'u40': 'TextEdit', 'u45': 'TextEdit', 'u50': 'TextEdit', 'u55': 'TextEdit', 'u60': 'TextEdit', 'u65': 'TextEdit', 'u70': 'TextEdit', 'u75': 'TextEdit', });
lyr_POSKO_7.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', });
lyr_SekolahTerdampak_8.set('fieldImages', {'NAME': 'TextEdit', 'IMAGE_LIN1': 'ExternalResource', 'IMAGE_LIN2': 'ExternalResource', 'IMAGE_LIN3': 'ExternalResource', });
lyr_StrukturGeologi_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'STR_JAWA_': 'TextEdit', 'STR_JAWA_I': 'TextEdit', });
lyr_HasilSurvey_10.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'IMAGE_LINK': 'ExternalResource', 'status': 'TextEdit', });
lyr_Epicenter_11.set('fieldImages', {'id': 'TextEdit', });
lyr_WILAYAHTERDAMPAK_2.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'jumlah_pen': 'inline label', 'kepadatan_': 'inline label', 'balita': 'inline label', 'lansia': 'inline label', 'Status': 'inline label', });
lyr_INTENSITASGEMPAMMI_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'header label', 'Shape_Area': 'inline label', 'mmi': 'inline label', });
lyr_WILAYAHTEDAMPAK3_5.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'jumlah_pen': 'inline label', 'kepadatan_': 'inline label', 'u0': 'inline label', 'u5': 'inline label', 'u10': 'inline label', 'u15': 'inline label', 'u20': 'inline label', 'u25': 'inline label', 'u30': 'inline label', 'u35': 'inline label', 'u40': 'inline label', 'u45': 'inline label', 'u50': 'inline label', 'u55': 'inline label', 'u60': 'inline label', 'u65': 'inline label', 'u70': 'inline label', 'u75': 'inline label', 'TERDAMPAK': 'inline label', 'balita': 'no label', 'lansia': 'no label', });
lyr_BATASDESA_6.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'jumlah_pen': 'inline label', 'kepadatan_': 'inline label', 'u0': 'inline label', 'u5': 'inline label', 'u10': 'inline label', 'u15': 'inline label', 'u20': 'inline label', 'u25': 'inline label', 'u30': 'inline label', 'u35': 'inline label', 'u40': 'inline label', 'u45': 'inline label', 'u50': 'inline label', 'u55': 'inline label', 'u60': 'inline label', 'u65': 'inline label', 'u70': 'inline label', 'u75': 'inline label', });
lyr_POSKO_7.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'KML_STYLE': 'inline label', });
lyr_SekolahTerdampak_8.set('fieldLabels', {'NAME': 'inline label', 'IMAGE_LIN1': 'inline label', 'IMAGE_LIN2': 'inline label', 'IMAGE_LIN3': 'inline label', });
lyr_StrukturGeologi_9.set('fieldLabels', {'OBJECTID': 'inline label', 'FNODE_': 'inline label', 'TNODE_': 'inline label', 'LPOLY_': 'inline label', 'RPOLY_': 'inline label', 'LENGTH': 'inline label', 'STR_JAWA_': 'inline label', 'STR_JAWA_I': 'inline label', });
lyr_HasilSurvey_10.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'IMAGE_LINK': 'inline label', 'status': 'inline label', });
lyr_Epicenter_11.set('fieldLabels', {'id': 'inline label', });
lyr_Epicenter_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});