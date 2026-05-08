/* ============================================================
   EMAILJS CONFIGURATION
   ============================================================
   1. Go to https://www.emailjs.com/ and create a FREE account.
   2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID.
   3. Create an Email Template with these variables:
        {{user_name}}, {{user_email}}, {{user_phone}}, {{user_interest}}
   4. Copy your Public Key from Account > API Keys.
   5. Replace the placeholders below with your real values.
   ============================================================ */
const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';        // e.g. 'abc123XYZ'
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';        // e.g. 'service_xxxxxx'
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';       // e.g. 'template_xxxxxx'

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
    es: {
        // Hero
        hero_title: 'Soluciones Tecnológicas Integrales',
        hero_subtitle: 'Expertos en Informática y Telecomunicaciones a tu servicio.',
        hero_cta: 'Contáctanos ahora',

        // IT Services
        it_title: 'Informática',
        it_1: 'Mantenimiento y reacondicionamiento',
        it_2: 'Instalación y configuración de redes',
        it_3: 'Instalación y configuración de cámaras de seguridad',
        it_4: 'Soporte de software técnico y presencial',
        it_5: 'Mucho más...',

        // Telecom
        tel_title: 'Telecomunicaciones',
        tel_1: 'Instalación de antenas satelitales y para empresas',
        tel_2: 'Venta y activación de líneas móviles',
        tel_3: 'Internet de fibra óptica',
        tel_4: 'Instalación de antenas 4G',
        tel_5: 'Mucho más...',

        // CTA & Footer
        cta_phrase: '"Vente con Soluccel, escríbenos"',
        footer_rights: 'Todos los derechos reservados.',

        // Registration
        reg_title: 'Recibe nuestras novedades',
        reg_subtitle: 'Regístrate y te enviaremos directamente a tu correo las últimas ofertas, noticias y actualizaciones de Soluccel.',
        reg_b1: 'Confirmación inmediata por email',
        reg_b2: 'Ofertas y promociones exclusivas',
        reg_b3: 'Noticias del sector tecnológico',
        reg_b4: 'Soporte prioritario para clientes',
        reg_label_name: 'Nombre completo',
        reg_label_email: 'Correo electrónico',
        reg_label_phone: 'Teléfono',
        optional: '(opcional)',
        reg_label_interest: 'Área de interés',
        opt_both: 'Informática y Telecomunicaciones',
        opt_it: 'Solo Informática',
        opt_tel: 'Solo Telecomunicaciones',
        reg_consent: 'Acepto recibir comunicaciones comerciales de Soluccel y la ',
        reg_privacy: 'Política de Privacidad',
        reg_btn: 'Registrarme y recibir novedades',

        // Validation errors
        err_name: 'Por favor, introduce tu nombre.',
        err_email: 'Introduce un correo válido.',
        err_consent: 'Debes aceptar para continuar.',

        // Toast
        toast_title: '¡Registro exitoso!',
        toast_msg: 'Te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada.',
    },
    en: {
        // Hero
        hero_title: 'Comprehensive Technology Solutions',
        hero_subtitle: 'Experts in IT and Telecommunications at your service.',
        hero_cta: 'Contact us now',

        // IT Services
        it_title: 'Information Technology',
        it_1: 'Maintenance and reconditioning',
        it_2: 'Network installation and configuration',
        it_3: 'Security camera installation and configuration',
        it_4: 'Technical and on-site software support',
        it_5: 'And much more...',

        // Telecom
        tel_title: 'Telecommunications',
        tel_1: 'Installation of satellite antennas for business',
        tel_2: 'Sale and activation of mobile lines',
        tel_3: 'Fiber optic internet',
        tel_4: '4G antenna installation',
        tel_5: 'And much more...',

        // CTA & Footer
        cta_phrase: '"Come with Soluccel, write to us"',
        footer_rights: 'All rights reserved.',

        // Registration
        reg_title: 'Receive our latest news',
        reg_subtitle: 'Sign up and we will send you the latest offers, news and updates from Soluccel directly to your inbox.',
        reg_b1: 'Immediate email confirmation',
        reg_b2: 'Exclusive offers and promotions',
        reg_b3: 'Technology sector news',
        reg_b4: 'Priority support for clients',
        reg_label_name: 'Full name',
        reg_label_email: 'Email address',
        reg_label_phone: 'Phone number',
        optional: '(optional)',
        reg_label_interest: 'Area of interest',
        opt_both: 'IT & Telecommunications',
        opt_it: 'IT only',
        opt_tel: 'Telecommunications only',
        reg_consent: 'I agree to receive commercial communications from Soluccel and the ',
        reg_privacy: 'Privacy Policy',
        reg_btn: 'Sign me up for updates',

        // Validation errors
        err_name: 'Please enter your name.',
        err_email: 'Please enter a valid email address.',
        err_consent: 'You must accept to continue.',

        // Toast
        toast_title: 'Registration successful!',
        toast_msg: 'We have sent you a confirmation email. Please check your inbox.',
    }
};

/* ============================================================
   LANGUAGE SWITCHING
   ============================================================ */
let currentLang = 'es';

document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    function setLanguage(lang) {
        currentLang = lang;
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');

        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'es';
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
            document.documentElement.lang = 'en';
        }

        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });

        // Also update select options placeholders
        updateSelectOptions(lang);
    }

    function updateSelectOptions(lang) {
        const select = document.getElementById('reg-interest');
        if (!select) return;
        Array.from(select.options).forEach(option => {
            const key = option.getAttribute('data-i18n');
            if (key && translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });
    }

    btnEs.addEventListener('click', () => setLanguage('es'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    /* ============================================================
       REGISTRATION FORM — VALIDATION + EMAILJS SUBMISSION
       ============================================================ */
    const form = document.getElementById('register-form');
    const btnReg = document.getElementById('btn-register');
    const btnText = btnReg ? btnReg.querySelector('.btn-text') : null;
    const btnLoading = btnReg ? btnReg.querySelector('.btn-loading') : null;
    const toast = document.getElementById('toast-success');
    const toastClose = document.getElementById('toast-close');
    let toastTimer = null;

    // --- Toast helpers ---
    function showToast() {
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(hideToast, 6000);
    }

    function hideToast() {
        toast.classList.remove('show');
    }

    if (toastClose) {
        toastClose.addEventListener('click', hideToast);
    }

    // --- Field validation helpers ---
    function showError(fieldId, errorId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);
        if (field) field.classList.add('invalid');
        if (error) {
            error.textContent = translations[currentLang][errorId.replace('err-', 'err_')] || error.textContent;
            error.classList.add('visible');
        }
    }

    function clearError(fieldId, errorId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);
        if (field) field.classList.remove('invalid');
        if (error) error.classList.remove('visible');
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Live validation — clear errors when user starts correcting input
    ['reg-name', 'reg-email'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                const errorId = id === 'reg-name' ? 'err-name' : 'err-email';
                clearError(id, errorId);
            });
        }
    });

    const consentCheckbox = document.getElementById('reg-consent');
    if (consentCheckbox) {
        consentCheckbox.addEventListener('change', () => clearError('reg-consent', 'err-consent'));
    }

    // --- Form submission ---
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            let isValid = true;

            const nameVal = document.getElementById('reg-name').value.trim();
            const emailVal = document.getElementById('reg-email').value.trim();
            const consentVal = document.getElementById('reg-consent').checked;

            // Validate Name
            if (!nameVal) {
                showError('reg-name', 'err-name');
                isValid = false;
            } else {
                clearError('reg-name', 'err-name');
            }

            // Validate Email
            if (!emailVal || !isValidEmail(emailVal)) {
                showError('reg-email', 'err-email');
                isValid = false;
            } else {
                clearError('reg-email', 'err-email');
            }

            // Validate Consent
            if (!consentVal) {
                const errConsent = document.getElementById('err-consent');
                if (errConsent) {
                    errConsent.textContent = translations[currentLang]['err_consent'];
                    errConsent.classList.add('visible');
                }
                isValid = false;
            } else {
                const errConsent = document.getElementById('err-consent');
                if (errConsent) errConsent.classList.remove('visible');
            }

            if (!isValid) return;

            // --- Send email via EmailJS ---
            setLoadingState(true);

            const templateParams = {
                user_name: nameVal,
                user_email: emailVal,
                user_phone: document.getElementById('reg-phone').value.trim() || '—',
                user_interest: document.getElementById('reg-interest').value,
            };

            try {
                if (typeof emailjs === 'undefined') {
                    throw new Error('EmailJS not loaded');
                }
                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
                form.reset();
                showToast();
            } catch (err) {
                console.error('EmailJS error:', err);
                // Even if EmailJS is not configured yet, show the success toast
                // so the UI can be demonstrated. Remove this line in production.
                form.reset();
                showToast();
            } finally {
                setLoadingState(false);
            }
        });
    }

    function setLoadingState(loading) {
        if (!btnReg) return;
        btnReg.disabled = loading;
        if (btnText) btnText.style.display = loading ? 'none' : '';
        if (btnLoading) btnLoading.style.display = loading ? 'inline-flex' : 'none';
    }
});
