// bring up world.
    window.vm = new Machine();

    function Machine(){
      //vm.hardware.init();
      this.cpu = new CPU({});
      var bus = Bus.create();
      this.emulator_bus = bus[1];
      var adapter_bus = bus[0];

      this.keyboard_adapter = new KeyboardAdapter(adapter_bus);

    }

    vm.powerOn = function(){
      //vm.hardware.init();
      vm.emulator_bus.register("keyboard-code", function(code)
      {
          console.log('keyboard event, key-code:', code);
      });

      vm.cpu.run();
    }

//end





