AFRAME.registerComponent('car-rotate', {
 
  update: function() {
    window.addEventListener("click", (e) => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        const rotation = {x: 0, y: 20, z: 0};
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2) {
        const rotation = {x: 0, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }

      if (this.data.clickCounter > 2) {
        const positionStep = 0.5; 
        const currentPosition = this.el.getAttribute('position');
        this.el.setAttribute('position', {x: currentPosition.x + positionStep, y: currentPosition.y, z: currentPosition.z});
      }

      if (this.data.clickCounter >= 10) {
        this.data.clickCounter = 0;
        const resetPosition = {x: 0, y: 1.5, z: -5}; 
        this.el.setAttribute('position', resetPosition);
      }
    });
  }
});


