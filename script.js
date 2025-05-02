function copyCode(code) {
    navigator.clipboard.writeText(code)
      .then(() => alert("Copied: " + code));
  }