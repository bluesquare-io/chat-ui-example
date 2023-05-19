<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Middleware;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    // The root template that is loaded on the first page visit.
    protected $rootView = 'app';

    public function handle(Request $request, Closure $next)
    {
        $translation_namespaces = ['messages'];
        $locale = app()->getLocale();
        $translations = [];

        if (file_exists(lang_path("$locale.json")))
            $translations = json_decode(file_get_contents(lang_path("$locale.json")), true);

        foreach ($translation_namespaces as $namespace) {
            if (file_exists(lang_path("$locale/$namespace.php"))) {
                $locale_translations = include(lang_path("$locale/$namespace.php"));
                $translations = array_merge($translations, $namespace === 'messages' ? $locale_translations  : [
                    $namespace => $locale_translations
                ]);
            }
        }

        $request->request->set('_translations', $translations);

        return parent::handle($request, $next);
    }

    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => fn () => [
                'success' => $request->session()->get('success'),
                'info' => $request->session()->get('info', $request->session()->get('message')),
                'warning' => $request->session()->get('warning'),
                'error' => $request->session()->get('error'),
            ],
            'locale' => app()->getLocale()
        ]);
    }
}
