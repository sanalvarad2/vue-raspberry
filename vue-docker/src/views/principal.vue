<template>
  
    <b-container fluid>
      <b-card no-body style="border-radius:15px; overflow:hidden">
        <b-card-body class="p-0">
          <!-- <b-card-title></b-card-title> -->
          <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
          <!-- <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text> -->
          <!-- <b-jumbotron
            header="BootstrapVue"
            lead="Bootstrap v4 Components for Vue.js 2"
          >
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
          </b-jumbotron> -->
          <b-carousel
            id="carousel-1"
            
            
            :interval="4000"
            img-width="1024"
      img-height="480"
            background="#ababab"
           
            style="text-shadow: 1px 1px 2px #333;"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://picsum.photos/1024/480/?image=54"
            >
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://picsum.photos/1024/480/?image=58"
            ></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>
        </b-card-body>
      </b-card>
    </b-container>
  
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
</style>