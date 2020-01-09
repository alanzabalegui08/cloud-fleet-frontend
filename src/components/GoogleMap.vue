<template>
    <gmap-map :center="center" :zoom="14" style="width:100%;  height: 550px;" @click="addMarketAction">
      <GmapMarker v-for="(item, index) in markets" :key="index" :position="item.position"
        @click="center = item.position" />
    </gmap-map>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  name: "GoogleMap",
  data() {
    return {
      center: {
        lat : 20.6736,
        lng : -103.344
      },
      markers : [],
      places  : [],
      currentPlace: null,
      coordinates: {
        lat : 20.6736,
        lng : -103.344,
      },
    };
  },

  computed: {
    ...mapGetters({
      position: 'map/getPosition',
      markets: 'map/getMarkets',
    }),
  },
  mounted() {
    this.geolocate();
  },

  methods: {
    ...mapActions({
      addressService: 'map/addressService',
      addPosition: 'map/addPosition',
    }),
    setPlace(place) {
      this.currentPlace = place;
    },
    updateCoordinates(location) {
      this.coordinates = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      };
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({
          position: marker
        });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }

    },
    addMarketAction(location) {
      this.coordinates = {
        position: {
          lat: location.latLng.lat(),
          lng: location.latLng.lng(),
        }
      };
      this.addMarker();
      this.markers.push(this.coordinates);
      this.addPosition(this.coordinates);
      this.addressService(this.coordinates);
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>