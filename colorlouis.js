<script type="text/javascript">
    function update(jscolor) {
      document.getElementById('haha').style.backgroundColor = '#' + jscolor // 'jscolor' instance can be used as a string

      document.getElementById('rgb').innerHTML =
        Math.round(jscolor.rgb[0]) + "&comma;" +
        Math.round(jscolor.rgb[1]) + "&comma;" +
        Math.round(jscolor.rgb[2]);

      document.getElementById('pickcolorrgb').value = document.getElementById('rgb').innerHTML;
    }
  </script>
