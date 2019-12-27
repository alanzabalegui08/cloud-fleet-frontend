<template>
  <div class="row">
    <gmap-map
      :center="center"
      :zoom="14"
      style="width:100%;  height: 700px;"
      @click="addMarketAction"
    >
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </gmap-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 20.6736, lng: -103.344},
      markers: [],
      places: [],
      currentPlace: null,
      coordinates: { lat: 20.6736, lng: -103.344},
    };
  },

  computed : {
    ...mapGetters({
      position : 'map/getPosition'
    }),
  },
  mounted() {
    this.geolocate();
  },
 
  methods: {
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
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }

    },
    addMarketAction (location) {
      this.coordinates = { 
        position : {
          lat: location.latLng.lat(),
          lng: location.latLng.lng(),
        }
      };
      this.addMarker();
      console.log(this.coordinates);
      this.markers.push(this.coordinates)
      
    },
    geolocate: function() {
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