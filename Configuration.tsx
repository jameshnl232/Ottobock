import type { ComponentType } from "react"

import { ConfiguratorFramer } from "https://cdn.jsdelivr.net/npm/@viamedici-spc/configurator-framer-bundle@3.0.0/dist/index.js"

//import * as ConfiguratorFramer from "http://localhost:3000/index.js?1234"

export const Configuration: ComponentType = ConfiguratorFramer.Configuration

export const ChoiceSelect: ComponentType = ConfiguratorFramer.ChoiceSelect

export const BooleanSelect: ComponentType = ConfiguratorFramer.BooleanSelect

export const ComponentSelect: ComponentType = ConfiguratorFramer.ComponentSelect

export const NumericInput: ComponentType = ConfiguratorFramer.NumericInput

export const SelectionToggle: ComponentType = ConfiguratorFramer.SelectionToggle

export const SetSelection: ComponentType = ConfiguratorFramer.SetSelection

export const SetSelections: ComponentType = ConfiguratorFramer.SetSelections

export const ResetConfiguration: ComponentType =
    ConfiguratorFramer.ResetConfiguration

export const SatisfactionIndicator: ComponentType =
    ConfiguratorFramer.SatisfactionIndicator

export const SelectionIndicator: ComponentType =
    ConfiguratorFramer.SelectionIndicator

export const InitializationRetry: ComponentType =
    ConfiguratorFramer.InitializationRetry

export const ChoiceValueListRenderer: ComponentType =
    ConfiguratorFramer.ChoiceValueListRenderer

export const Singleton: ComponentType = ConfiguratorFramer.Singleton

export const AttributeName: ComponentType = ConfiguratorFramer.AttributeName

export const ChoiceValueName: ComponentType = ConfiguratorFramer.ChoiceValueName

export const ScrollIntoView: ComponentType = ConfiguratorFramer.ScrollIntoView

export const Slot: ComponentType = ConfiguratorFramer.Slot

export const StoreConfiguration: ComponentType =
    ConfiguratorFramer.StoreConfiguration

export const RestoreConfiguration: ComponentType =
    ConfiguratorFramer.RestoreConfiguration

export const SelectedNumericValue: ComponentType =
    ConfiguratorFramer.SelectedNumericValue

export const PropagateHeight: ComponentType = ConfiguratorFramer.PropagateHeight

export const withFullSize = (Component): ComponentType =>
    ConfiguratorFramer.withFullSize(Component)

export const useRenderPlaceholder = ConfiguratorFramer.useRenderPlaceholder
