;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-
(load-file "$HOME/.config/doom/custom.el")

(setq user-full-name "lordie"
      user-mail-address "levimanga@gmail.com"
      doom-theme 'doom-one
      doom-font (font-spec :family "Fira Code" :size 12)
      org-directory "~/org/"
      display-line-numbers-type t
      save-interprogram-paste-before-kill t

      projectile-indexing-method 'alien ;;don't index .git and git ignored files
      ;;projectile-project-search-path (doom-files-in '("~/Projects/" "~/Projects/Learn/" "~/Projects/CTF/")  :depth 0 :type 'dirs)

      ;;lsp-ui-doc-use-childframe nil
      rustic-lsp-server 'rust-analyzer
      lsp-rust-analyzer-proc-macro-enable t
      lsp-rust-analyzer-cargo-load-out-dirs-from-check t
      )

;;(server-mode)
(set-fontset-font t 'symbol "Twemoji")
(persp-counsel-switch-buffer)

(use-package! boon
  :config
  (require 'boon-colemak)
  (boon-mode)
  (general-define-key :keymaps 'boon-command-map
                      "C-e" 'doom/escape
                      "c" (general-simulate-key "C-c"))
  (general-define-key :keymaps 'global-map
                      "C-e" 'boon-set-command-state)
  (general-define-key :keymaps 'boon-x-map
                      "s" 'save-buffer
                      "C-s" 'save-some-buffers
                      "f" 'find-file))

(use-package! persp-mode
  :general (:keymaps 'boon-command-map
            "1" '+workspace/switch-to-0
            "2" '+workspace/switch-to-1
            "3" '+workspace/switch-to-2
            "4" '+workspace/switch-to-3))

(use-package! ivy
  :general
  (:keymaps 'boon-command-map
   "p" 'swiper)
  (:keymaps 'boon-x-map
   "b" 'counsel-switch-buffer
   "B" 'counsel-projectile-switch-to-buffer
   "C-b" 'counsel-switch-buffer-other-window)

  :config
  (setq counsel-projectile-remove-current-buffer t
        counsel-projectile-preview-buffers t
        counsel-switch-buffer-preview-virtual-buffers t
        ivy-ignore-buffers '("\\` " "\\`\\*")))

(use-package! switch-window
  :general (:keymaps 'boon-command-map
            "C-w" 'switch-window-mvborder-up
            "C-r" 'switch-window-mvborder-down
            "C-a" 'switch-window-mvborder-left
            "C-s" 'switch-window-mvborder-right
            "C-b" 'balance-windows)
  :config
  (setq switch-window-shortcut-style 'qwerty
        switch-window-qwerty-shortcuts '("n" "e" "i" "o" "'")
        switch-window-extra-map nil))

(use-package! rainbow-mode
  :config (add-to-list 'minor-mode-list 'rainbow-mode))

(use-package! elcord
  :config
  (setq elcord-idle-timer 360
        elcord-use-major-mode-as-main-icon t)
  (elcord-mode t))

(use-package! org-projectile
  :config
  (org-projectile-per-project)
  (setq org-projectile-per-project-filepath "/docs/todo.org")
  (setq org-agenda-files (append org-agenda-files (org-projectile-todo-files))))

(after! tramp
  (setq tramp-inline-compress-start-size 1000)
  (setq tramp-copy-size-limit 10000)
  (setq vc-handled-backends '(Git))
  (setq tramp-verbose 1)
  (setq tramp-default-method "rpc")
  (setq tramp-use-ssh-controlmaster-options nil)
  (setq projectile--mode-line "Projectile")
  (setq tramp-verbose 1))
