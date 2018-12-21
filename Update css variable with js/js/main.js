const inputs = document.querySelectorAll(".control input");
function handelupdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach(input => input.addEventListener("change", handelupdate));
inputs.forEach(input => input.addEventListener("mousemove", handelupdate));
