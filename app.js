const { createApp, ref } = Vue;

createApp({
  setup() {
    const frasesOriginales = [
        
      { frase: 'hola.', autor: 'jacinto' },
      { frase: 'Primero aprende a programar.', autor: 'noemy mejia' },
      { frase: 'Eso no es suficiente.', autor: 'mery'},
      { frase: 'Cualquiera hubiera escrito esto.', autor: 'rag' },
      { frase: 'Soy tu fan.', autor: 'lady' }
    ];

    const frases = ref([...frasesOriginales]);
    const nuevaFrase = ref({ frase: '', autor: '' });
    const mensajeReinicioVisible = ref(false);

    const agregarFrase = () => {
      if (!nuevaFrase.value.frase || !nuevaFrase.value.autor) {
        alert('Por favor, completa ambos campos antes de añadir la frase.');
        return;
      }
      frases.value.push({ frase: nuevaFrase.value.frase, autor: nuevaFrase.value.autor });
      nuevaFrase.value.frase = '';
      nuevaFrase.value.autor = '';
      mensajeReinicioVisible.value = false;
    };

    const reiniciarFrases = () => {
      frases.value = [...frasesOriginales];
      mensajeReinicioVisible.value = true;
    };

    return {
      frases,
      nuevaFrase,
      agregarFrase,
      reiniciarFrases,
      mensajeReinicioVisible,
    };
  }
}).mount('#app');
